export interface ReadingTimeResult {
  words: number;
  minutes: number;
}

export function calculateReadingTime(text: string, wordsPerMinute = 200): ReadingTimeResult {
  const words = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;

  return {
    words,
    minutes: Math.max(1, Math.ceil(words / wordsPerMinute)),
  };
}
