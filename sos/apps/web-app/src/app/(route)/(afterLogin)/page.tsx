'use client';

import React, { useState, useEffect } from 'react';
import {
  Notification,
  InfoButton,
  Container,
  WeatherBox,
  Headline,
  MessageList,
  MoreButton,
} from '@sos/components-react';
import { useFetchUserDisasters, useFetchFollowings, useFetchWeather } from '@/app/_hooks';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage(message: string): void;
    };
  }
}

export default function Home() {
  const router = useRouter();

  const routeToPage = (route: string) => {
    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: 'NAVIGATE',
          url: route,
        }),
      );
    } else {
      router.push(route, undefined);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    routeToPage(href);
  };

  const { data } = useFetchUserDisasters();
  const disasterResponses = data?.disasterResponses ?? [];

  const weatherInfo = useFetchWeather(37.5665, 126.978).data;
  const followingMembers = useFetchFollowings().data?.followResponses ?? [];

  type AlertLevel = 'default' | 'danger' | 'warning' | 'safe' | 'ghost' | undefined;
  type AlertLevels = { [key: string]: AlertLevel };

  const [alertLevels, setAlertLevels] = useState<AlertLevels>({});

  useEffect(() => {
    const initialAlertLevels: AlertLevels = followingMembers.reduce((acc: AlertLevels, member) => {
      const level = getInitialAlertLevel(member.nickName);
      acc[member.nickName] = level;
      return acc;
    }, {});

    if (JSON.stringify(alertLevels) !== JSON.stringify(initialAlertLevels)) {
      setAlertLevels(initialAlertLevels);
    }
  }, [followingMembers, disasterResponses]);

  function getInitialAlertLevel(memberNickName: string): AlertLevel {
    const memberResponse = disasterResponses.find(
      (response) => response.followName === memberNickName,
    );
    if (memberResponse) {
      if (memberResponse.level === '위급재난') return 'danger';
      if (memberResponse.level === '긴급재난') return 'warning';
    }
    return 'default';
  }

  const handleButtonClick = (memberNickName: string) => {
    if (alertLevels[memberNickName] === 'danger') {
      setAlertLevels((prevLevels) => ({
        ...prevLevels,
        [memberNickName]: 'safe',
      }));
    }
  };

  const latestCriticalResponse = disasterResponses
    .filter((response) => response.level === '위급재난' || response.level === '긴급재난')
    .sort((a, b) => new Date(b.sendTime).getTime() - new Date(a.sendTime).getTime())[0];

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowY: 'auto' }}
    >
      {latestCriticalResponse && (
        <Container paddingX={16} paddingY={12}>
          <Notification
            state={latestCriticalResponse.level === '위급재난' ? 'danger' : 'warning'}
            content={`[${latestCriticalResponse.classification}] ${latestCriticalResponse.locationName}: 행동강령 확인`}
          />
        </Container>
      )}
      <Container paddingX={16}>
        <WeatherBox
          temperature={weatherInfo?.temp ?? '-'}
          highestTemperature={weatherInfo?.maxTemp ?? '-'}
          lowestTemperature={weatherInfo?.minTemp ?? '-'}
          iconSrc="/test.png"
          windSpeed={weatherInfo?.windSpeed ?? '-'}
          condition=""
          date={new Date().toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
          })}
          location="서울특별시 강남구"
        />
      </Container>
      <Container display="flex" flexDirection="column" paddingY={16}>
        <Container display="flex" justifyContent="space-between">
          <Headline>친구 현황</Headline>
        </Container>
        <Container display="flex" paddingX={12} paddingY={8} gap={16}>
          {followingMembers.map((member, index) => (
            <InfoButton
              key={index}
              variant={
                member.nickName === '엄마'
                  ? 'danger'
                  : member.nickName === '동생'
                    ? 'warning'
                    : 'default'
              }
              badgeText={
                member.nickName === '엄마'
                  ? '위급재난'
                  : member.nickName === '동생'
                    ? '긴급재난'
                    : ''
              }
              subText={alertLevels[member.nickName] === 'safe' ? '안전' : ''}
              size="s"
              onClick={() => {
                const memberResponse = disasterResponses.find(
                  (response) => response.followName === member.nickName,
                );
                if (
                  alertLevels[member.nickName] === 'danger' &&
                  memberResponse &&
                  !memberResponse.mine
                ) {
                  handleButtonClick(member.nickName);
                }
              }}
            >
              {member.nickName}
            </InfoButton>
          ))}
        </Container>
      </Container>
      <Container display="flex" flexDirection="column" paddingY={16}>
        <Container display="flex" justifyContent="space-between">
          <Headline>재난 문자</Headline>
          <Link href={'/emergency-alert'} onClick={(e) => handleLinkClick(e, '/emergency-alert')}>
            <MoreButton />
          </Link>
        </Container>
        <Container>
          <Container display="flex" flexDirection="column" paddingX={16} paddingY={8} gap={8}>
            {disasterResponses.map((response) => (
              <MessageList
                key={response.id}
                mode="round"
                isRead={true}
                isChecked={false}
                following={response.mine ? '' : response.followName}
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
          </Container>
        </Container>
      </Container>
    </div>
  );
}
