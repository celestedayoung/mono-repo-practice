import { useQuery } from '@tanstack/react-query';
import { fetchCommentsByBoardId } from '@/app/_libs';
import { CommentGetResponses } from '@/app/_types';

export const useFetchComments = (boardId: number) => {
  return useQuery<CommentGetResponses, Error>({
    queryKey: ['comments', boardId],
    queryFn: () => fetchCommentsByBoardId(boardId),
    enabled: !!boardId,
  });
};
