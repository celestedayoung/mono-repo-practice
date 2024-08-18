import { useQuery } from '@tanstack/react-query';
import { fetchReplies } from '@/app/_libs';

export const useFetchReplies = (commentId: number) => {
  const isClient = typeof window !== 'undefined';

  return useQuery({
    queryKey: ['replies', commentId],
    queryFn: () => fetchReplies(commentId),
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
