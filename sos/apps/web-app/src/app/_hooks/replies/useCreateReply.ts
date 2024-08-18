import { useMutation } from '@tanstack/react-query';
import { createReply } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';
import { CreateReplyVariables, Reply } from '@/app/_types';

export const useCreateReply = () => {
  return useMutation<Reply, Error, CreateReplyVariables>({
    mutationFn: ({ commentId, memberId, data }) => createReply(commentId, memberId, data),
    onSuccess: (data) => {
      handleSuccess('✅ Reply created successfully', data);
    },
    onError: (error) => {
      handleError('😥 Failed to create reply', error);
    },
  });
};
