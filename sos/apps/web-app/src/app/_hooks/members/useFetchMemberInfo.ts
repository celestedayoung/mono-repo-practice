import { useQuery } from '@tanstack/react-query';
import { fetchMemberInfo } from '@/app/_libs';

export const useFetchMemberInfo = () => {
  const isClient = typeof window !== 'undefined';

  return useQuery({
    queryKey: ['memberInfo'],
    queryFn: fetchMemberInfo,
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
