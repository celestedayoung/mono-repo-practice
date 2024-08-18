'use client';

import { Text, Container, Title, Headline, InfoBox, TabList } from '@sos/components-react';
import { useFetchMemberInfo, useFetchFollowings, useFetchUserDisasters } from '@/app/_hooks';

export default function MyPage() {
  const memberInfo = useFetchMemberInfo().data;
  console.log(memberInfo);
  const followingMembers = useFetchFollowings().data?.followResponses ?? [];
  const userDisasters = useFetchUserDisasters().data?.disasterResponses ?? [];
  const infos = [
    { title: '나의 팔로잉', content: `${followingMembers.length}명`, link: '/mypage/following' },
    { title: '관심지역', content: '1개', link: '/mypage/location' },
    { title: '재난문자', content: `${userDisasters.length}개`, link: '/emergency-alert' },
  ];

  return (
    <>
      <Container display="flex" flexDirection="column" gap={16}>
        <Title>마이페이지</Title>
        <Container padding={16}>
          <Container
            display="flex"
            flexDirection="column"
            padding={24}
            gap={10}
            borderType="border"
            borderRadius="base"
            borderColor={'gray200'}
          >
            <Text textType="heading1" textMode="bold">
              {memberInfo?.name}
            </Text>
            <Text>{memberInfo?.loginId}</Text>
            <Text>서울특별시 강남구 역삼동</Text>
          </Container>
        </Container>
        <Container display="flex" paddingX={16}>
          <InfoBox infos={infos} backgroundColor="gray100" />
        </Container>
        <Container
          display="flex"
          flexDirection="column"
          paddingY={16}
          gap={10}
          backgroundColor="backgroundNormalPrimary"
        >
          <Headline>설정</Headline>
          <TabList icon="person">계정 설정</TabList>
          <TabList icon="gps_fixed">위치 설정</TabList>
          <TabList icon="notifications_active">알림 설정</TabList>
        </Container>
        <Container
          display="flex"
          flexDirection="column"
          paddingY={16}
          gap={10}
          backgroundColor="backgroundNormalPrimary"
        >
          <Headline>설정</Headline>
          <TabList icon="priority_high">공지사항</TabList>
          <TabList icon="gavel">법적고지</TabList>
        </Container>
      </Container>
    </>
  );
}
