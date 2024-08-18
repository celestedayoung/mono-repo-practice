import { useQuery } from '@tanstack/react-query';
import { fetchFollowNumber } from '@/app/_libs';
import { FollowPhoneResponse } from '@/app/_types';

export const useFetchFollowNumber = (followerId: number) => {
  return useQuery<FollowPhoneResponse, Error>({
    queryKey: ['followPhone', followerId],
    queryFn: () => fetchFollowNumber(followerId),
    enabled: !!followerId,
  });
};
