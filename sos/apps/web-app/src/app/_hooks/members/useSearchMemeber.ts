import { useQuery } from '@tanstack/react-query';
import { searchMember } from '@/app/_libs';
import { MemberSearchResponses } from '@/app/_types';

export const useSearchMember = (searchKeyword: string) => {
  const isClient = typeof window !== 'undefined';

  return useQuery<MemberSearchResponses, Error>({
    queryKey: ['searchMember', searchKeyword],
    queryFn: () => searchMember(searchKeyword),
    enabled: isClient && !!searchKeyword,
  });
};
