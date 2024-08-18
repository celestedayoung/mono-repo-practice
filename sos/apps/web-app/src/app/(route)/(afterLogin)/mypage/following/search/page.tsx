'use client';

import { useState } from 'react';
import { MemberList, Container, Input } from '@sos/components-react';
import { useSearchMember, useCreateFollower } from '@/app/_hooks';

export default function FollowingSearch() {
  const [query, setQuery] = useState('');

  const { mutate: createFollower } = useCreateFollower();

  const searchResults = useSearchMember(query).data?.memberSearchInfos;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleMemberClick = (followerId: number) => {
    createFollower(followerId);
  };

  return (
    <>
      <Container display="flex" padding={16}>
        <Input
          state="default"
          width={'100%'}
          placeholder="회원 정보를 입력하세요."
          value={query}
          onChange={handleInputChange}
        />
      </Container>

      {searchResults && searchResults.length > 0 && (
        <Container display="flex" flexDirection="column">
          {searchResults.map((result, index) => (
            <MemberList
              key={index}
              loginId={result.loginId}
              nickName={result.nickname}
              name={result.loginId}
              onClick={() => handleMemberClick(result.id)}
            />
          ))}
        </Container>
      )}
    </>
  );
}
