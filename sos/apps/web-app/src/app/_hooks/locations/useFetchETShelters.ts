import { useQuery } from '@tanstack/react-query';
import { fetchETShelters } from '@/app/_libs';

export const useFetchETShelters = (lat: number, lon: number, radius: number) => {
  const isClient = typeof window !== 'undefined';

  return useQuery({
    queryKey: ['etShelters', lat, lon, radius],
    queryFn: () => fetchETShelters(lat, lon, radius),
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
