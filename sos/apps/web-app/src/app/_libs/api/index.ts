import setupInterceptors from './interceptors';
setupInterceptors(); // 일단 임시로 소환

export { default as api } from './client';
export * from './interceptors';

// endpoints
export * from './auth';
export * from './boards';
export * from './comments';
export * from './disasters';
export * from './follows';
export * from './guguns';
export * from './locations';
export * from './members';
export * from './notices';
export * from './replies';
export * from './s3';
export * from './sidos';
export * from './weather';
