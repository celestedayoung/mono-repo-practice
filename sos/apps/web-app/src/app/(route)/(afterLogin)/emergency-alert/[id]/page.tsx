'use client';

import { Container, Title, MessageList } from '@sos/components-react';
import { useFetchDisasterById } from '@/app/_hooks';

export default function EmergencyAlertDetail({ params }: { params: { id: number } }) {
  const { data } = useFetchDisasterById(params.id);
  if (!data) {
    return;
  }

  let variant: 'default' | 'danger' | 'warning' = 'default';
  if (data.level === '위급재난') {
    variant = 'danger';
  } else if (data.level === '긴급재난') {
    variant = 'warning';
  }

  return (
    <>
      <Container
        display="flex"
        flexDirection="column"
        height="100dvh"
        backgroundColor="backgroundNormalPrimary"
      >
        <Title>{`[${data.classification}] ${data.locationName}`}</Title>
        <MessageList
          variant={variant}
          mode="default"
          content={data.msg}
          date={new Date(data.sendTime).toLocaleString()}
          following={data.mine ? '' : data.followName}
          isRead={true}
          isChecked={false}
          style={{ border: 'none', backgroundColor: 'transparent' }}
        />
      </Container>
    </>
  );
}
