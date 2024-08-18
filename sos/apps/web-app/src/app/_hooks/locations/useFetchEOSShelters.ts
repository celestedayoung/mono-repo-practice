import { useQuery } from '@tanstack/react-query';
import { fetchEOShelters } from '@/app/_libs';

export const useFetchEOShelters = (lat: number, lon: number, radius: number) => {
  const isClient = typeof window !== 'undefined';

  return useQuery({
    queryKey: ['eoShelters', lat, lon, radius],
    queryFn: () => fetchEOShelters(lat, lon, radius),
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
