import { useMutation } from '@tanstack/react-query';
import { createComment } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';
import { CommentCreateRequest } from '@/app/_types';

export const useCreateComment = () => {
  return useMutation<void, Error, { boardId: number; commentData: CommentCreateRequest }>({
    mutationFn: ({ boardId, commentData }) => createComment(boardId, commentData),
    onSuccess: (data) => {
      handleSuccess('✅ Comment created successfully', data);
    },
    onError: (error: Error) => {
      handleError('😥 Failed to create comment', error);
    },
  });
};
