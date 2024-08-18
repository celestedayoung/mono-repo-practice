import { useMutation } from '@tanstack/react-query';
import { createFollower } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';

export const useCreateFollower = () => {
  return useMutation<void, Error, number>({
    mutationFn: (followerId: number) => createFollower(followerId),
    onSuccess: (data) => {
      handleSuccess('✅ Follow created successfully', data);
    },
    onError: (error: Error) => {
      handleError('😥 Failed to create follow', error);
    },
  });
};
