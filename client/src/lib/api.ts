const normalizeUrl = (value: string) => value.trim().replace(/\/$/, '');

const rawApiBaseUrl = normalizeUrl(import.meta.env.VITE_API_URL || '');
const runtimeOrigin = typeof window !== 'undefined' ? normalizeUrl(window.location.origin) : '';

const getOrigin = (url: string) => {
  try {
    return new URL(url).origin;
  } catch {
    return '';
  }
};

export const API_BASE_URL = rawApiBaseUrl || runtimeOrigin;
export const IS_CROSS_ORIGIN_API =
  Boolean(rawApiBaseUrl) &&
  Boolean(runtimeOrigin) &&
  getOrigin(rawApiBaseUrl) !== getOrigin(runtimeOrigin);

export const buildApiUrl = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return API_BASE_URL ? `${API_BASE_URL}${normalizedPath}` : normalizedPath;
};

export const CONTACT_API_PATHS = ['/api/contact'] as const;
