import { useQuery } from '@tanstack/react-query';
import { fetchAED } from '@/app/_libs';
import { useEffect } from 'react';

export const useFetchAED = (lat: number, lon: number, radius: number) => {
  const isClient = typeof window !== 'undefined';

  const query = useQuery({
    queryKey: ['locations', lat, lon, radius],
    queryFn: () => fetchAED(lat, lon, radius),
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });

  useEffect(() => {
    if (query.data) {
      console.log('📝 Fetched AED Data:', query.data);
    }
  }, [query.data]);

  return query;
};
