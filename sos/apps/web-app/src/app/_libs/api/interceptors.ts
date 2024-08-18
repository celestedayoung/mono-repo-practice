import { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import api from './client';
import { ApiRequestConfig } from '@/app/_types';
import { reissueToken } from './auth';

interface ErrorResponse {
  data?: {
    code?: string;
  };
}

const setupInterceptors = () => {
  // Request Interceptor
  api.interceptors.request.use(
    (config: ApiRequestConfig) => {
      // 만약 intercepting이 필요하지 않는다면 pass
      if (config.bypassInterceptor) return config;

      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      // console.log(config);
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  // Response Interceptor
  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError<ErrorResponse>) => {
      const originalRequest = error.config as ApiRequestConfig;
      // 만약 intercepting이 필요하지 않는다면 pass
      if (originalRequest.bypassInterceptor) {
        return Promise.reject(error);
      }

      if (isAccessTokenExpired(error) && !originalRequest._retry) {
        return handleTokenRefresh(originalRequest);
      }
      return Promise.reject(error);
    },
  );
};

const isAccessTokenExpired = (error: AxiosError<ErrorResponse>) => {
  return error.response?.status === 400 && error.response?.data?.data?.code === 'J002';
};

const handleTokenRefresh = async (
  originalRequest: InternalAxiosRequestConfig & { _retry?: boolean },
) => {
  originalRequest._retry = true;
  try {
    const newAccessToken = await refreshAccessToken();
    updateAuthorizationHeader(originalRequest, newAccessToken);
    return api(originalRequest);
  } catch (refreshError) {
    handleRefreshFailure();
    return Promise.reject(refreshError);
  }
};

const refreshAccessToken = async (): Promise<string> => {
  const response = await reissueToken();
  const { accessToken } = response;
  localStorage.setItem('accessToken', accessToken);
  return accessToken;
};

const updateAuthorizationHeader = (request: InternalAxiosRequestConfig, token: string): void => {
  request.headers.Authorization = `Bearer ${token}`;
};

const handleRefreshFailure = (): void => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

  // 추가 로그아웃 처리 작성 가능
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
};

export default setupInterceptors;
