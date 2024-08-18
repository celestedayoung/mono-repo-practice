'use client';

import { useState, useMemo, SetStateAction } from 'react';
import { Container, Input, FollowingList } from '@sos/components-react';
import { useFetchFollowings, useSearchFollowings, useCreateFollower } from '@/app/_hooks';

export default function Following() {
  const [query, setQuery] = useState('');

  const { mutate: createFollower } = useCreateFollower();
  const followingMembers = useFetchFollowings().data?.followResponses;
  const searchResults = useSearchFollowings(query).data?.followResponses;

  const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
    setQuery(e.target.value);
  };

  const handleDelete = (nickNameToDelete: string, memberId: number) => {
    createFollower(memberId);
  };

  const displayedMembers = useMemo(() => {
    return query ? searchResults : followingMembers;
  }, [query, searchResults, followingMembers]);

  return (
    <>
      <Container display="flex" padding={16}>
        <Input
          state="default"
          width={'100%'}
          placeholder="팔로잉/팔로우 정보를 입력하세요."
          value={query}
          onChange={handleInputChange}
        />
      </Container>
      <Container display="flex" flexDirection="column" padding={16} gap={16}>
        {displayedMembers?.map((follow, index) => (
          <FollowingList
            key={index}
            nickName={follow.nickName}
            loginId={follow.memberId}
            onDelete={() => handleDelete(follow.nickName, follow.id)}
          />
        ))}
      </Container>
    </>
  );
}
