import { handleApiRequest } from '../client';
import { ApiRequestConfig, LoginCredentials, TokenPair } from '@/app/_types';

export const loginUser = async (credentials: LoginCredentials) => {
  return handleApiRequest<TokenPair, 'post', LoginCredentials>('/login', 'post', credentials, {
    bypassInterceptor: true,
  } as ApiRequestConfig);
};

export const loginWithOauth = async (code: string) => {
  return handleApiRequest<TokenPair, 'get'>(`/login/oauth?code=${code}`, 'get', undefined, {
    bypassInterceptor: true,
  } as ApiRequestConfig);
};
