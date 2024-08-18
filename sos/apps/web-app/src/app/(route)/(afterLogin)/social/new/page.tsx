'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Container, TextArea, Button } from '@sos/components-react';
import { vars } from '@sos/style-tokens';
import { useCreateBoard } from '@/app/_hooks/boards/useCreateBoard';
import { useRouter } from 'next/navigation';

export default function NewSocialPost() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const router = useRouter();

  const createBoardMutation = useCreateBoard();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createBoardMutation.mutate(
      {
        title,
        content,
        sido: '서울특별시', // 임시 값
        gugun: '강남구', // 임시 값
        address: '서울시', // 임시 값
      },
      {
        onSuccess: () => {
          router.push('/social');
        },
      },
    );
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <Container
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      paddingX={16}
      paddingY={32}
      height={'100dvh'}
      backgroundColor="backgroundNormalPrimary"
    >
      <Container display="flex" flexDirection="column" gap={32}>
        <Container display="flex" justifyContent="space-between">
          <input
            placeholder="제목을 입력하세요."
            value={title}
            onChange={handleTitleChange}
            style={{
              backgroundColor: 'transparent',
              color: vars.color.$palette.text.normal,
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: '25px',
              width: '100%',
            }}
          />
          <style jsx>{`
            input::placeholder {
              color: ${vars.color.$palette.gray[200]};
              font-size: 20px;
              font-weight: 600;
            }
          `}</style>
        </Container>
        <Button type="button" icon="photo" variant="secondary" design="outline" iconColor="blue500">
          사진 올리기
        </Button>
      </Container>
      <Container width={'100%'} paddingY={32} height={'100%'}>
        <TextArea value={content} onChange={handleContentChange} />
      </Container>
      <Container paddingY={16}>
        <Button type="submit">등록하기</Button>
      </Container>
    </Container>
  );
}
