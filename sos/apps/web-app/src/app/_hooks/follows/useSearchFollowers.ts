import { useQuery } from '@tanstack/react-query';
import { fetchFollowers } from '@/app/_libs';
import { FollowResponses } from '@/app/_types';

export const useFetchFollowers = () => {
  return useQuery<FollowResponses, Error>({
    queryKey: ['followers'],
    queryFn: fetchFollowers,
  });
};
