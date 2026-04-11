export type Theme = 'light' | 'dark';

export function getStoredTheme(): Theme | null {
  const theme = localStorage.getItem('theme');
  return theme === 'light' || theme === 'dark' ? theme : null;
}

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getPreferredTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

export function setTheme(theme: Theme) {
  localStorage.setItem('theme', theme);
  applyTheme(theme);
}

export function toggleTheme(): Theme {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}
