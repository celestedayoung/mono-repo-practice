import { useMutation } from '@tanstack/react-query';
import { deleteComment } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';

export const useDeleteComment = () => {
  return useMutation<void, Error, number>({
    mutationFn: (commentId: number) => deleteComment(commentId),
    onSuccess: (data) => {
      handleSuccess('✅ Comment deleted successfully', data);
    },
    onError: (error: Error) => {
      handleError('😥 Failed to delete comment', error);
    },
  });
};
