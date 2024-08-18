import { useMutation } from '@tanstack/react-query';
import { updateMemberPassword } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';
import { MemberUpdatePasswordRequest } from '@/app/_types';

export const useUpdateMemberPassword = () => {
  return useMutation<void, Error, MemberUpdatePasswordRequest>({
    mutationFn: (data: MemberUpdatePasswordRequest) => updateMemberPassword(data),
    onSuccess: (data) => {
      handleSuccess('✅ Password updated successfully', data);
    },
    onError: (error: Error) => {
      handleError('😥 Failed to update password', error);
    },
  });
};
