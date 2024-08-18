import { useQuery } from '@tanstack/react-query';
import { fetchDisasterById } from '@/app/_libs';
import { DisasterResponse } from '@/app/_types';

export const useFetchDisasterById = (id: number) => {
  return useQuery<DisasterResponse, Error>({
    queryKey: ['disastersById', id],
    queryFn: () => fetchDisasterById(id),
    enabled: !!id,
  });
};
