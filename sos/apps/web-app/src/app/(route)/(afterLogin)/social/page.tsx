'use client';
import {
  useClickFactButton,
  useClickReportButton,
  useFetchBoardImage,
  useFetchBoards,
} from '@/app/_hooks';
import { Container, Text, Icon, Input, Button, SocialContentList } from '@sos/components-react';
import { vars } from '@sos/style-tokens';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { BoardItemProps } from '@/app/_types';

function BoardItem({
  board,
  routeToPath,
  handleFactClick,
  handleReportClick,
  isFact,
}: BoardItemProps) {
  const { data: boardImages } = useFetchBoardImage(board.id);

  return (
    <Container
      key={board.id}
      display="flex"
      flexDirection="column"
      gap={16}
      backgroundColor={isFact ? 'backgroundElevatedPrimary' : 'backgroundNormalPrimary'}
    >
      <SocialContentList
        title={board.title}
        writer={board.memberId}
        date={board.createdAt}
        location={board.address}
        viewCounts={board.count}
        commentCounts={board.commentNum}
        content={board.content}
        isTrueCounts={board.factCnt}
        isFalseCounts={board.reportCnt}
        isDetail={false}
        routeToPath={() => routeToPath(board.id)}
        firstBtnFunc={() => handleFactClick(board.id)}
        secondBtnFucnt={() => handleReportClick(board.id)}
        isFact={isFact}
      >
        {boardImages?.images.map((image, index) => (
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
    </Container>
  );
}

export default function Social() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const { data: boards } = useFetchBoards(searchTerm);

  console.log(boards);

  const queryClient = useQueryClient();

  const clickFactButton = useClickFactButton();
  const clickReportButton = useClickReportButton();

  const routeToPath = (route: string) => {
    router.push(route);
  };

  const handleFactClick = (boardId: number) => {
    clickFactButton.mutate(
      { boardId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['boards'] });
        },
      },
    );
  };

  const handleReportClick = (boardId: number) => {
    clickReportButton.mutate(
      { boardId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['boards'] });
        },
      },
    );
  };

  return (
    <>
      <Container display="flex" flexDirection="column" style={{ position: 'relative' }}>
        <Container
          display="flex"
          padding={16}
          gap={10}
          backgroundColor="backgroundNormalPrimary"
          width={'100%'}
          style={{ position: 'fixed', top: 0, zIndex: 10 }}
        >
          <Container display="flex" justifyContent="center" alignItems="center" gap={10}>
            <Text textMode="bold">전국</Text>
          </Container>
          <Icon>{'expand_more'}</Icon>
        </Container>
        <Container
          display="flex"
          paddingX={16}
          paddingY={12}
          style={{ position: 'fixed', top: 56, width: '100%', zIndex: 10 }}
          backgroundColor="backgroundNormalSecondary"
        >
          <Input
            ref={inputRef}
            state="default"
            placeholder="검색어를 입력하세요."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Container>
      </Container>

      <Container style={{ paddingTop: '125px' }} display="flex" flexDirection="column" gap={16}>
        {boards?.boardResponses.map((board) => (
          <BoardItem
            key={board.id}
            board={board}
            routeToPath={() => routeToPath(`/social/${board.id}`)}
            handleFactClick={handleFactClick}
            handleReportClick={handleReportClick}
            isFact={board.isFact}
          />
        ))}
      </Container>

      <Container
        display="flex"
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          zIndex: 10,
        }}
      >
        <Button
          icon="add"
          variant="primary"
          size="l"
          style={{
            borderRadius: vars.radius.borderRadius.round,
          }}
          onClick={() => routeToPath(`/social/new`)}
        />
      </Container>
    </>
  );
}
