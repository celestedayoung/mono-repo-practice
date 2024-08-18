import { useMutation } from '@tanstack/react-query';
import { updateFollowNickName } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';
import { FollowNickNameRequest, FollowResponse } from '@/app/_types';

export const useUpdateFollowNickName = () => {
  return useMutation<FollowResponse, Error, FollowNickNameRequest>({
    mutationFn: (data: FollowNickNameRequest) => updateFollowNickName(data),
    onSuccess: (data) => {
      handleSuccess('✅ Follow nickname updated successfully', data);
    },
    onError: (error: Error) => {
      handleError('😥 Failed to update follow nickname', error);
    },
  });
};
