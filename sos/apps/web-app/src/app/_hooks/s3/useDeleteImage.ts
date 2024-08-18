// import { useMutation } from '@tanstack/react-query';
// import { s3delete } from '@/app/_libs';
// import { handleSuccess, handleError } from '@/app/_libs';

// export const useS3Delete = () => {
//   return useMutation<void, Error, string>({
//     mutationFn: (addr: string) => s3delete(addr),
//     onSuccess: (data) => {
//       handleSuccess('✅ 이미지 삭제에 성공했습니다', data);
//     },
//     onError: (error) => {
//       handleError('😥 이미지 삭제에 실패했습니다', error);
//     },
//   });
// };
