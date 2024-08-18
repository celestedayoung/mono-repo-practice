'use client';

import React, { useState } from 'react';
import { Container, Chips, Divider, MessageList } from '@sos/components-react';
import { useRouter } from 'next/navigation';
import { useFetchUserDisasters, useFetchFollowings } from '@/app/_hooks';

export default function EmergencyAlert() {
  const router = useRouter();
  const routeToPage = (route: string) => {
    router.push(route);
  };

  const { data } = useFetchUserDisasters();
  const disasterResponses = data?.disasterResponses ?? [];

  const followingMembers = useFetchFollowings().data?.followResponses ?? [];

  const [activeChip, setActiveChip] = useState<string | null>('전체보기');

  const handleChipClick = (member: string) => {
    setActiveChip(member);
  };

  const filteredResponses =
    activeChip === '나'
      ? disasterResponses.filter((response) => response.mine)
      : activeChip === '전체보기'
        ? disasterResponses
        : disasterResponses.filter((response) => response.followName === activeChip);

  return (
    <>
      <Container display="flex" paddingX={16} paddingY={12} gap={8}>
        <Chips
          size="l"
          variant="secondary"
          state={activeChip === '전체보기' ? 'active' : 'outline'}
          onClick={() => handleChipClick('전체보기')}
        >
          전체보기
        </Chips>
        <Divider orientation="vertical" />
        <Chips
          size="l"
          variant="secondary"
          state={activeChip === '나' ? 'active' : 'outline'}
          onClick={() => handleChipClick('나')}
        >
          나
        </Chips>
        {followingMembers.map((member, index) => (
          <Chips
            key={index}
            size="l"
            variant="secondary"
            state={activeChip === member.nickName ? 'active' : 'outline'}
            onClick={() => handleChipClick(member.nickName)}
          >
            {member.nickName}
          </Chips>
        ))}
      </Container>
      {filteredResponses.map((response) => (
        <MessageList
          key={response.id}
          mode="default"
          isRead={true}
          isChecked={false}
          following={response.mine ? '나' : response.followName}
          variant={
            response.level === '위급재난'
              ? 'danger'
              : response.level === '긴급재난'
                ? 'warning'
                : 'default'
          }
          title={`[${response.classification}] ${response.locationName}`}
          content={response.msg}
          date={new Date(response.sendTime).toLocaleString()}
          onClick={() => {
            routeToPage(`/emergency-alert/${response.id}`);
          }}
        />
      ))}
    </>
  );
}
