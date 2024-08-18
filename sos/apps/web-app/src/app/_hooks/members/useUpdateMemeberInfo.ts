import { useMutation } from '@tanstack/react-query';
import { updateMemberInfo } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';
import { MemberUpdateInfoRequest } from '@/app/_types';

export const useUpdateMemberInfo = () => {
  return useMutation<void, Error, MemberUpdateInfoRequest>({
    mutationFn: (data: MemberUpdateInfoRequest) => updateMemberInfo(data),
    onSuccess: (data) => {
      handleSuccess('✅ Member info updated successfully', data);
    },
    onError: (error: Error) => {
      handleError('😥 Failed to update member info', error);
    },
  });
};
