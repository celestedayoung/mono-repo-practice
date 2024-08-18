import { handleApiRequest } from '../client';
import { AccessToken, RefreshToken, ApiRequestConfig, TokenPair } from '@/app/_types';

export const reissueToken = async () => {
  const currentAccessToken: AccessToken | null = localStorage.getItem('accessToken');
  const refreshToken: RefreshToken | null = localStorage.getItem('refreshToken');

  if (!currentAccessToken || !refreshToken) {
    throw new Error('🔑Tokens are missing');
  }

  return handleApiRequest<{ accessToken: AccessToken }, 'post', TokenPair>(
    '/reissue',
    'post',
    {
      accessToken: currentAccessToken,
      refreshToken,
    },
    { bypassInterceptor: true } as ApiRequestConfig,
  );
};
