import { useQuery } from '@tanstack/react-query';
import { searchFollowings } from '@/app/_libs';
import { FollowResponses } from '@/app/_types';

export const useSearchFollowings = (nickName: string) => {
  return useQuery<FollowResponses, Error>({
    queryKey: ['followings', nickName],
    queryFn: () => searchFollowings(nickName),
    enabled: !!nickName,
  });
};
