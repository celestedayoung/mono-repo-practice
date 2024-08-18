import { useQuery } from '@tanstack/react-query';
import { fetchUserDisasters } from '@/app/_libs';
import { DisasterResponses } from '@/app/_types';

export const useFetchUserDisasters = () => {
  return useQuery<DisasterResponses, Error>({
    queryKey: ['disasterUser'],
    queryFn: () => fetchUserDisasters(),
  });
};
