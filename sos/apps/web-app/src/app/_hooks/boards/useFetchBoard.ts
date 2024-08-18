import { useQuery } from '@tanstack/react-query';
import { fetchBoardById } from '@/app/_libs/api/boards';
import { Board } from '@/app/_types';

export const useFetchBoard = (boardId: number) => {
  const isClient = typeof window !== 'undefined';

  return useQuery<Board, Error>({
    queryKey: ['board', boardId],
    queryFn: () => fetchBoardById(boardId),
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
