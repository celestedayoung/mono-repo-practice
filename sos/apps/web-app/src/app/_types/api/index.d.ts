import { InternalAxiosRequestConfig } from 'axios';

// API 설정
export interface ApiRequestConfig extends InternalAxiosRequestConfig {
  bypassInterceptor?: boolean;
  _retry?: boolean;
}

export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';
export type ConditionalData<M extends HttpMethod, D> = M extends 'get' | 'delete' ? undefined : D;

// API 응답
export interface ApiResponse<T> {
  data: T;
  message: string;
  timestamp: string;
  statusCode: string;
}

// API 에러
export interface ApiErrorResponse {
  data: {
    code: string;
    trackingId: string;
    detailMessage: string;
  };
  message: string;
  timestamp: string;
  statusCode: string;
}
