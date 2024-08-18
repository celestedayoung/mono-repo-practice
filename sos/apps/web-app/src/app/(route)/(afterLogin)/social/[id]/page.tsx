'use client';

import {
  useClickFactButton,
  useClickReportButton,
  useCreateComment,
  useFetchBoard,
  useFetchBoardImage,
  useFetchComments,
} from '@/app/_hooks';
import { Container, CommentList, SocialContentList, InputGroup } from '@sos/components-react';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import Loading from '../loading';
import React, { useRef, useState } from 'react';

export default function SocialDetail({ params }: { params: { id: number } }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { data: board, isLoading: boardLoading, refetch } = useFetchBoard(params.id);
  const { data: images, isLoading: imagesLoading } = useFetchBoardImage(params.id);
  const { data: comments, isLoading: commentsLoading } = useFetchComments(params.id);

  const queryClient = useQueryClient();

  const clickFactButton = useClickFactButton();
  const clickReportButton = useClickReportButton();
  const createCommentMutation = useCreateComment();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleFactClick = (boardId: number) => {
    clickFactButton.mutate(
      { boardId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['board', boardId] });
          refetch();
        },
      },
    );
  };

  const handleReportClick = (boardId: number) => {
    clickReportButton.mutate(
      { boardId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['board', boardId] });
          refetch();
        },
      },
    );
  };

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      createCommentMutation.mutate(
        {
          boardId: params.id,
          commentData: { content: inputValue.trim() },
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', params.id] });
            queryClient.invalidateQueries({ queryKey: ['board', params.id] });
            setInputValue('');
            // 댓글이 추가된 후 페이지 전체를 스크롤
            setTimeout(scrollToBottom, 100);
          },
        },
      );
    }
  };

  if (boardLoading || imagesLoading || commentsLoading) {
    return <Loading />;
  }

  return (
    <Container
      display="flex"
      flexDirection="column"
      gap={16}
      style={{ minHeight: '100vh', paddingBottom: '80px' }}
    >
      <Container backgroundColor="backgroundNormalPrimary">
        {board && (
          <SocialContentList
            title={board?.title}
            writer={board?.memberId}
            date={board?.createdAt}
            location={board?.address}
            viewCounts={board?.count}
            commentCounts={board?.commentNum}
            content={board?.content}
            isTrueCounts={board?.factCnt}
            isFalseCounts={board?.reportCnt}
            isDetail={true}
            firstBtnFunc={() => handleFactClick(board?.id)}
            secondBtnFucnt={() => handleReportClick(board?.id)}
          >
            {images?.images.map((image, index) => (
              <Image
                key={index}
                src={image.addr}
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            ))}
          </SocialContentList>
        )}
      </Container>
      <Container display="flex" flexDirection="column" backgroundColor="backgroundNormalPrimary">
        {comments?.commentGetResponses.map((comment) => (
          <React.Fragment key={comment.id}>
            <CommentList
              writer={comment.memberLoginId}
              date={comment.regDate}
              isReply={false}
              isWriter={false}
            >
              {comment.content}
            </CommentList>

            {comment.replies.map((reply) => (
              <CommentList
                key={reply.id}
                writer={reply.memberLoginId}
                date={reply.regDate}
                isReply={true}
                isWriter={false}
              >
                {reply.content}
              </CommentList>
            ))}
          </React.Fragment>
        ))}
      </Container>
      <Container
        backgroundColor="backgroundElevatedSecondary"
        paddingX={16}
        paddingTop={8}
        paddingBottom={16}
        style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10 }}
      >
        <InputGroup
          ref={inputRef}
          state="default"
          showLabel={false}
          buttonText="등록하기"
          onButtonClick={handleSubmitComment}
          buttonType="submit"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Container>
    </Container>
  );
}
