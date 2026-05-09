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

export const formatDayRange = (
  days: string[],
  dayLabels: Record<string, string>,
  rangeSeparator: string,
) => {
  if (days.length === 1) {
    return dayLabels[days[0] as keyof typeof dayLabels];
  }

  const firstDay = dayLabels[days[0] as keyof typeof dayLabels];
  const lastDay = dayLabels[days[days.length - 1] as keyof typeof dayLabels];

  return `${firstDay} ${rangeSeparator} ${lastDay}`;
};

export const formatIntervals = (intervals: { opens: string; closes: string }[], closed: string) => {
  if (intervals.length === 0) return closed;

  return intervals.map((interval) => `${interval.opens}-${interval.closes}`).join(' · ');
};
