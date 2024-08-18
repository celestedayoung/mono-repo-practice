// import { useMutation } from '@tanstack/react-query';
// import { saveBoardImage } from '@/app/_libs';
// import { handleSuccess, handleError } from '@/app/_libs';
// import { BoardImageRequest } from '@/app/_types';

// export const useSaveBoardImage = () => {
//   return useMutation<void, Error, BoardImageRequest>({
//     mutationFn: (data: BoardImageRequest) => saveBoardImage(data),
//     onSuccess: (data) => {
//       handleSuccess('✅ 게시판과 이미지 주소 저장에 성공했습니다', data);
//     },
//     onError: (error) => {
//       handleError('😥 게시판과 이미지 주소 저장에 실패했습니다', error);
//     },
//   });
// };
