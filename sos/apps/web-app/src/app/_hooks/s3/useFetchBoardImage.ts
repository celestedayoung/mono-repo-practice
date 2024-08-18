import { useQuery } from '@tanstack/react-query';
import { fetchBoardImage } from '@/app/_libs/api/s3'; // s3 API 함수가 있는 파일 경로에 맞게 수정해주세요
import { ImageResponses } from '@/app/_types/s3';

export const useFetchBoardImage = (boardId: number) => {
  const isClient = typeof window !== 'undefined';

  return useQuery<ImageResponses, Error>({
    queryKey: ['boardImage', boardId],
    queryFn: () => fetchBoardImage(boardId),
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
