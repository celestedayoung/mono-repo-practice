// import { useMutation } from '@tanstack/react-query';
// import { s3Upload } from '@/app/_libs';
// import { handleSuccess, handleError } from '@/app/_libs';
// import { ImageResponse } from '@/app/_types';

// export const useUploadImage = () => {
//   return useMutation<ImageResponse, Error, File>({
//     mutationFn: (image: File) => s3Upload(image),
//     onSuccess: (data) => {
//       handleSuccess('✅ 이미지 업로드에 성공했습니다', data);
//     },
//     onError: (error) => {
//       handleError('😥 이미지 업로드에 실패했습니다', error);
//     },
//   });
// };
