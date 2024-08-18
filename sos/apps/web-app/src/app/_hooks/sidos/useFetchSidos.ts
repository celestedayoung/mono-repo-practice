import { useQuery } from '@tanstack/react-query';
import { fetchSidos } from '@/app/_libs';

export const useFetchSidos = () => {
  const isClient = typeof window !== 'undefined';

  return useQuery({
    queryKey: ['sidos'],
    queryFn: fetchSidos,
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
