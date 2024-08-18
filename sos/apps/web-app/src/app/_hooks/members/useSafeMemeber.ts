import { useMutation } from '@tanstack/react-query';
import { safeMember } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';

export const useSafeMember = () => {
  return useMutation<void, Error>({
    mutationFn: safeMember,
    onSuccess: (data) => {
      handleSuccess('✅ Member marked as safe successfully', data);
    },
    onError: (error: Error) => {
      handleError('😥 Failed to mark member as safe', error);
    },
  });
};
