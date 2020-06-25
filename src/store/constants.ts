const withApiUrl = (path: string): string => `/api${path}`;

export const API_URLS = {
  AUTHENTICATE: withApiUrl('/authenticate'),
  PROFILE: withApiUrl('/profile'),
} as const;
