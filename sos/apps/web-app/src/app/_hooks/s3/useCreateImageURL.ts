// import { useMutation } from '@tanstack/react-query';
// import { generatePresignedUrl } from '@/app/_libs';
// import { handleSuccess, handleError } from '@/app/_libs';

// export const useCreateImageURL = () => {
//   return useMutation<string, Error, string>({
//     mutationFn: (saveFileName: string) => generatePresignedUrl(saveFileName),
//     onSuccess: (data) => {
//       handleSuccess('✅ Presigned URL 생성에 성공했습니다', data);
//     },
//     onError: (error) => {
//       handleError('😥 Presigned URL 생성에 실패했습니다', error);
//     },
//   });
// };
