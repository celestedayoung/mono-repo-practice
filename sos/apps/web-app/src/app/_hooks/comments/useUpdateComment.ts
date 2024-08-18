import { useMutation } from '@tanstack/react-query';
import { updateComment } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';
import { CommentUpdateRequest } from '@/app/_types';

export const useUpdateComment = () => {
  return useMutation<void, Error, { commentId: number; commentData: CommentUpdateRequest }>({
    mutationFn: ({ commentId, commentData }) => updateComment(commentId, commentData),
    onSuccess: (data) => {
      handleSuccess('✅ Comment updated successfully', data);
    },
    onError: (error: Error) => {
      handleError('😥 Failed to update comment', error);
    },
  });
};
