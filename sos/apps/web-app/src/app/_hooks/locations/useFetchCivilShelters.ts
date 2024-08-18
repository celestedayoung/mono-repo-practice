import { useQuery } from '@tanstack/react-query';
import { fetchCivilShelters } from '@/app/_libs';

export const useFetchCivilShelters = (lat: number, lon: number, radius: number) => {
  const isClient = typeof window !== 'undefined';

  return useQuery({
    queryKey: ['civilShelters', lat, lon, radius],
    queryFn: () => fetchCivilShelters(lat, lon, radius),
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
