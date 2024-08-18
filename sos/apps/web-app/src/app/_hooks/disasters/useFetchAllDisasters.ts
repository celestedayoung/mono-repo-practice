import { useQuery } from '@tanstack/react-query';
import { fetchAllDisasters } from '@/app/_libs';
import { DisasterResponses } from '@/app/_types';

export const useFetchAllDisasters = () => {
  return useQuery<DisasterResponses, Error>({
    queryKey: ['allDisasters'],
    queryFn: fetchAllDisasters,
  });
};
