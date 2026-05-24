export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get('name')?.toString().trim() ?? '';
  const location = formData.get('location')?.toString().trim() ?? '';
  const phone = formData.get('phone')?.toString().trim() ?? '';
  const email = formData.get('email')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  if (!name || !location || !phone || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const selectedService = formData.get('service')?.toString() ?? '';
  const customService = formData.get('service_other')?.toString().trim() ?? '';
  const service = selectedService === 'Otro' && customService ? customService : selectedService;

  const accessConditions = formData.getAll('access').map(String);
  const files = formData.getAll('files').filter((file): file is File => file instanceof File);

  const emailMessage = `
Nueva solicitud de presupuesto desde la web

Nombre: ${name}
Ubicación: ${location}
Teléfono: ${phone}
Email: ${email || 'No indicado'}

Servicio:
${service || 'No indicado'}

Mensaje:
${message}

Medidas:
${formData.get('measurements')?.toString().trim() || 'No indicado'}

Lugar de instalación:
${formData.get('installation_place')?.toString() || 'No indicado'}

Condiciones de acceso:
${accessConditions.length ? accessConditions.map((x) => `- ${x}`).join('\n') : 'No indicado'}

Imágenes:
${files.length ? files.map((file) => `- ${file.name}`).join('\n') : 'No adjuntadas'}
`.trim();

  const { error } = await resend.emails.send({
    from: import.meta.env.CONTACT_FROM_EMAIL,
    to: [import.meta.env.CONTACT_TO_EMAIL],
    subject: `Nueva solicitud de presupuesto - ${name}`,
    text: emailMessage,
    replyTo: email || undefined,
  });

  if (error) {
    console.error(error);
    return Response.json({ error: 'Email send failed' }, { status: 500 });
  }

  return Response.json({ ok: true }, { status: 200 });
};
