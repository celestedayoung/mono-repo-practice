import { useQuery } from '@tanstack/react-query';
import { fetchDisastersByLocation } from '@/app/_libs';
import { DisasterResponses } from '@/app/_types';

export const useFetchDisastersByLocation = (location: string) => {
  return useQuery<DisasterResponses, Error>({
    queryKey: ['disastersByLocation', location],
    queryFn: () => fetchDisastersByLocation(location),
    enabled: !!location,
  });
};
