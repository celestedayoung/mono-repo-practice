import { useQuery } from '@tanstack/react-query';
import { fetchFollowings } from '@/app/_libs';
import { FollowResponses } from '@/app/_types';

export const useFetchFollowings = () => {
  return useQuery<FollowResponses, Error>({
    queryKey: ['followings'],
    queryFn: fetchFollowings,
  });
};
