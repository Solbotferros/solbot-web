export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const MAX_FILES = 4;
const MAX_TOTAL_SIZE_MB = 10;

const ALLOWED_IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
];

const ALLOWED_IMAGE_EXTENSIONS = [
  '.jpg',
  '.jpeg',
  '.jfif',
  '.pjpeg',
  '.pjp',
  '.png',
  '.webp',
  '.heic',
  '.heif',
];

const isAllowedImageFile = (file: File) => {
  const fileName = file.name.toLowerCase();

  return (
    ALLOWED_IMAGE_MIME_TYPES.includes(file.type) ||
    ALLOWED_IMAGE_EXTENSIONS.some((extension) => fileName.endsWith(extension))
  );
};

const getContentType = (file: File) => {
  if (file.type) return file.type;

  const name = file.name.toLowerCase();

  if (name.endsWith('.heic')) return 'image/heic';
  if (name.endsWith('.heif')) return 'image/heif';
  if (name.endsWith('.jpg') || name.endsWith('.jpeg') || name.endsWith('.jfif'))
    return 'image/jpeg';
  if (name.endsWith('.png')) return 'image/png';
  if (name.endsWith('.webp')) return 'image/webp';

  return 'application/octet-stream';
};

const MAX_FIELD_LENGTHS = {
  name: 100,
  location: 150,
  phone: 40,
  email: 150,
  message: 3000,
  measurements: 1000,
  installationPlace: 100,
};

export const POST: APIRoute = async ({ request }) => {
  // Basic check for required environment variables
  const contactFromEmail = import.meta.env.CONTACT_FROM_EMAIL;
  const contactToEmail = import.meta.env.CONTACT_TO_EMAIL;

  if (!contactFromEmail || !contactToEmail || !import.meta.env.RESEND_API_KEY) {
    console.error('Missing email environment variables');

    return Response.json({ error: 'Email configuration error' }, { status: 500 });
  }

  // Parse form data and validate fields
  const formData = await request.formData();

  // Check honeypot field to prevent spam
  const website = formData.get('website')?.toString().trim();

  if (website) {
    return Response.json({ ok: true }, { status: 200 });
  }

  // Check privacy policy acceptance
  const privacyAccepted = formData.get('privacy')?.toString() === 'accepted';

  if (!privacyAccepted) {
    return Response.json({ error: 'Privacy policy not accepted' }, { status: 400 });
  }

  // Real validation of form fields

  const name = formData.get('name')?.toString().trim() ?? '';
  const location = formData.get('location')?.toString().trim() ?? '';
  const phone = formData.get('phone')?.toString().trim() ?? '';

  const isValidPhone = (value: string) => {
    const normalized = value.replace(/[\s()-]/g, '');

    return /^\+?[0-9]{7,15}$/.test(normalized);
  };

  if (!isValidPhone(phone)) {
    return Response.json({ error: 'Invalid phone' }, { status: 400 });
  }

  const email = formData.get('email')?.toString().trim() ?? '';

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  if (email && !isValidEmail(email)) {
    return Response.json({ error: 'Invalid email' }, { status: 400 });
  }

  const message = formData.get('message')?.toString().trim() ?? '';

  if (!name || !location || !phone || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const selectedService = formData.get('service')?.toString() ?? '';
  const customService = formData.get('service_other')?.toString().trim() ?? '';
  const service = selectedService === 'Otro' && customService ? customService : selectedService;

  if (!service) {
    return Response.json({ error: 'Missing service' }, { status: 400 });
  }

  if (selectedService === 'Otro' && !customService) {
    return Response.json({ error: 'Missing custom service' }, { status: 400 });
  }

  const accessConditions = formData.getAll('access').map(String);

  const measurements = formData.get('measurements')?.toString().trim() ?? '';

  const installationPlace = formData.get('installation_place')?.toString().trim() ?? '';

  if (
    name.length > MAX_FIELD_LENGTHS.name ||
    location.length > MAX_FIELD_LENGTHS.location ||
    phone.length > MAX_FIELD_LENGTHS.phone ||
    email.length > MAX_FIELD_LENGTHS.email ||
    message.length > MAX_FIELD_LENGTHS.message ||
    measurements.length > MAX_FIELD_LENGTHS.measurements ||
    installationPlace.length > MAX_FIELD_LENGTHS.installationPlace
  ) {
    return Response.json({ error: 'Field too long' }, { status: 400 });
  }

  const files = formData
    .getAll('files')
    .filter((file): file is File => file instanceof File && file.size > 0);

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  if (files.length > MAX_FILES) {
    return Response.json({ error: 'Too many files' }, { status: 400 });
  }

  if (totalSize > MAX_TOTAL_SIZE_MB * 1024 * 1024) {
    return Response.json(
      {
        error: 'Files too large',
      },
      {
        status: 400,
      },
    );
  }

  const invalidFiles = files.filter((file) => !isAllowedImageFile(file));

  if (invalidFiles.length > 0) {
    return Response.json({ error: 'Invalid file type' }, { status: 400 });
  }

  const submittedAt = new Date().toLocaleString('es-ES', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Europe/Madrid',
  });

  // Construct email content
  const emailMessage = `
Nueva solicitud de presupuesto desde la web

Fecha:
${submittedAt}

Nombre: ${name}
Ubicación: ${location}
Teléfono: ${phone}
Email: ${email || 'No indicado'}

Servicio:
${service || 'No indicado'}

Mensaje:
${message}

Medidas:
${measurements || 'No indicado'}

Lugar de instalación:
${installationPlace || 'No indicado'}

Condiciones de acceso:
${accessConditions.length ? accessConditions.map((x) => `- ${x}`).join('\n') : 'No indicado'}
`.trim();

  // Create attachments if there are files
  const attachments =
    files.length > 0
      ? await Promise.all(
          files.map(async (file) => {
            const buffer = Buffer.from(await file.arrayBuffer());

            return {
              filename: file.name,
              content: buffer.toString('base64'),
              contentType: getContentType(file),
            };
          }),
        )
      : undefined;

  // Send email using Resend
  const { error } = await resend.emails.send({
    from: contactFromEmail,
    to: [contactToEmail],
    subject: `[Web] ${service} - ${name}`,
    text: emailMessage,
    replyTo: email || undefined,
    attachments,
  });

  // Log error if email sending fails
  if (error) {
    console.error(error);
    return Response.json({ error: 'Email send failed' }, { status: 500 });
  }

  // Return success response
  return Response.json({ ok: true }, { status: 200 });
};
