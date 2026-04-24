export function getPhoneHref(phone: { prefix: string; number: string }) {
  return `tel:${phone.prefix}${phone.number}`;
}

export function getPhoneDisplay(phone: { prefix: string; number: string }) {
  return `${phone.prefix} ${phone.number}`;
}

export function formatSpanishPhone(number: string) {
  return number.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4');
}

export function formatWhatsappLink(phone: { prefix: string; number: string }, message?: string) {
  const cleanNumber = phone.number.replace(/\s/g, '');
  if (message) {
    return `https://wa.me/${phone.prefix}${cleanNumber}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${phone.prefix}${cleanNumber}`;
}
