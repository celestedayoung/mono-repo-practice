import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      handleSuccess('✅ Login successful', data);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    },
    onError: (error) => {
      handleError('😥 Login failed', error);
    },
  });
};
