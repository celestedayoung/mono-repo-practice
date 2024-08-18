import { useMutation } from '@tanstack/react-query';
import { deleteMember } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';

export const useDeleteMember = () => {
  return useMutation<void, Error>({
    mutationFn: () => deleteMember(),
    onSuccess: (data) => {
      handleSuccess('✅ Member deleted successfully', data);
    },
    onError: (error: Error) => {
      handleError('😥 Failed to delete member', error);
    },
  });
};
