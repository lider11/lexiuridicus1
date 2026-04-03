const normalizeUrl = (value: string) => value.trim().replace(/\/$/, '');

const rawApiBaseUrl = normalizeUrl(import.meta.env.VITE_API_URL || '');
const runtimeOrigin = typeof window !== 'undefined' ? normalizeUrl(window.location.origin) : '';
const allowCrossOriginApi = (import.meta.env.VITE_ALLOW_CROSS_ORIGIN_API || '').toLowerCase() === 'true';

const getOrigin = (url: string) => {
  try {
    return new URL(url).origin;
  } catch {
    return '';
  }
};

const hasCrossOriginConfig =
  Boolean(rawApiBaseUrl) &&
  Boolean(runtimeOrigin) &&
  getOrigin(rawApiBaseUrl) !== getOrigin(runtimeOrigin);

export const API_BASE_URL =
  hasCrossOriginConfig && !allowCrossOriginApi
    ? runtimeOrigin
    : (rawApiBaseUrl || runtimeOrigin);

export const buildApiUrl = (path: string) => {
  if (!path.startsWith('/')) {
    throw new Error(`API path must start with "/": ${path}`);
  }

  return API_BASE_URL ? `${API_BASE_URL}${path}` : path;
};
