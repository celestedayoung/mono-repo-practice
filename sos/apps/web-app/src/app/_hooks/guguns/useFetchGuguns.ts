import { useQuery } from '@tanstack/react-query';
import { fetchGuguns } from '@/app/_libs';

export const useFetchGuguns = (sidoId: number) => {
  const isClient = typeof window !== 'undefined';

  return useQuery({
    queryKey: ['guguns', sidoId],
    queryFn: () => fetchGuguns(sidoId),
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
