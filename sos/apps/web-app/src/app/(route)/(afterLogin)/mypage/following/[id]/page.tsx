'use client';

import { useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Container, InputGroup, Button } from '@sos/components-react';

export default function FollowingDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = params.id;

  const originalNickname = searchParams.get('nickname') || '';

  const [nickname, setNickname] = useState<string>(originalNickname);

  const handleSave = () => {
    router.push('/mypage/following');
  };

  return (
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height={'100dvh'}
      padding={16}
      gap={16}
    >
      <InputGroup
        state="default"
        placeholder={originalNickname}
        labelContent="이름"
        showStar={false}
        showButton={false}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <Button onClick={handleSave}>수정하기</Button>
    </Container>
  );
}
