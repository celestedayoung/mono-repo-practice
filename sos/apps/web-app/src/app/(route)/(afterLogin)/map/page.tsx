'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from './_components/userKakaoLoader';
import { Container, Chips, MapBottomSheet, LoadingSpinner } from '@sos/components-react';
import {
  useFetchAED,
  useFetchCivilShelters,
  useFetchEOShelters,
  useFetchETShelters,
} from '@/app/_hooks';
import {
  AEDResponse,
  CivilShelterResponse,
  EOShelterResponse,
  ETShelterResponse,
} from '@/app/_types';
import dayjs from 'dayjs';

export default function BasicMap() {
  useKakaoLoader();

  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);
  const [radius, setRadius] = useState(2);
  const [isClient, setIsClient] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<
    AEDResponse | CivilShelterResponse | EOShelterResponse | ETShelterResponse | null
  >(null);
  const [selectedChip, setSelectedChip] = useState<string>('');

  const clustererRef = useRef<kakao.maps.MarkerClusterer | null>(null);
  const markersRef = useRef<kakao.maps.Marker[]>([]);

  useEffect(() => {
    setIsClient(true);
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          console.log('❌ Fail to load geolocation', error.message);
          setLat(37.5665);
          setLon(126.978);
        },
      );
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      setLat(37.5665);
      setLon(126.978);
    }
  }, []);

  const {
    data: aedData,
    error: aedError,
    isLoading: aedLoading,
  } = useFetchAED(lat ?? 0, lon ?? 0, radius ?? 0);
  const {
    data: civilShelterData,
    error: civilShelterError,
    isLoading: civilShelterLoading,
  } = useFetchCivilShelters(lat ?? 0, lon ?? 0, radius ?? 0);
  const {
    data: eoShelterData,
    error: eoShelterError,
    isLoading: eoShelterLoading,
  } = useFetchEOShelters(lat ?? 0, lon ?? 0, radius ?? 0);
  const {
    data: etShelterData,
    error: etShelterError,
    isLoading: etShelterLoading,
  } = useFetchETShelters(lat ?? 0, lon ?? 0, radius ?? 0);

  if (
    !isClient ||
    lat === null ||
    lon === null ||
    aedLoading ||
    civilShelterLoading ||
    eoShelterLoading ||
    etShelterLoading
  ) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <LoadingSpinner />
      </div>
    );
  }

  if (aedError || civilShelterError || eoShelterError || etShelterError)
    return (
      <div>{(aedError || civilShelterError || eoShelterError || etShelterError)?.message}</div>
    );

  const currentData = (() => {
    switch (selectedChip) {
      case '제세동기':
        return aedData?.aedResponses ?? [];
      case '민방위대피소':
        return civilShelterData?.civilShelterResponses ?? [];
      case '지진(옥외)대피소':
        return eoShelterData?.eoShelterResponses ?? [];
      case '지진/해일대피소':
        return etShelterData?.etShelterResponses ?? [];
      default:
        return [];
    }
  })();

  const markerImages: {
    제세동기: { default: string; selected: string };
    민방위대피소: { default: string; selected: string };
    '지진(옥외)대피소': { default: string; selected: string };
    '지진/해일대피소': { default: string; selected: string };
  } = {
    제세동기: {
      default: '/aed_default.png',
      selected: '/aed.png',
    },
    민방위대피소: {
      default: '/civil_default.png',
      selected: '/civil.png',
    },
    '지진(옥외)대피소': {
      default: '/eo_default.png',
      selected: '/eo.png',
    },
    '지진/해일대피소': {
      default: '/et_default.png',
      selected: '/et.png',
    },
  };

  const defaultMarkerImage = {
    src: markerImages[selectedChip as keyof typeof markerImages]?.default || '',
    size: {
      width: 24,
      height: 35,
    },
    options: {
      offset: {
        x: 12,
        y: 35,
      },
    },
  };

  const selectedMarkerImage = {
    src: markerImages[selectedChip as keyof typeof markerImages]?.selected || '',
    size: {
      width: 30,
      height: 41,
    },
    options: {
      offset: {
        x: 16,
        y: 37,
      },
    },
  };

  // 지도에 표시된 마커들을 초기화
  const clearMarkers = () => {
    markersRef.current.forEach((marker) => {
      marker.setMap(null);
    });
    markersRef.current = [];

    if (clustererRef.current) {
      clustererRef.current.clear();
    }
  };

  // chip을 누르면 표시되는 마커들을 변경
  const handleChipClick = (chipContent: string) => {
    clearMarkers(); // 마커 초기화를 먼저 수행
    setSelectedChip(chipContent);
    setSelectedMarker(null);
  };

  // makrer를 누르면 bottom sheet 표시
  const handleMarkerClick = (
    item: AEDResponse | CivilShelterResponse | EOShelterResponse | ETShelterResponse,
  ) => {
    setSelectedMarker(item);
  };

  const clusterColors = {
    제세동기: 'rgba(255, 47, 68, 0.5)',
    민방위대피소: 'rgba(0, 117, 39, 0.3)',
    '지진(옥외)대피소': 'rgba(255, 93, 0, 0.5)',
    '지진/해일대피소': 'rgba(0, 102, 255, 0.5)',
  };

  const formatTime = (time: string) => {
    if (!time || time.length !== 4) return '00:00';
    return `${time.slice(0, 2)}:${time.slice(2, 4)}`;
  };

  const formatOperatingTime = (timeRange: string) => {
    if (!timeRange || timeRange.length !== 8) return '00:00-00:00';
    const startTime = formatTime(timeRange.slice(0, 4));
    const endTime = formatTime(timeRange.slice(4, 8));
    return `${startTime}-${endTime}`;
  };

  type OperatingTimeData = {
    monTime: string;
    tueTime: string;
    wedTime: string;
    thuTime: string;
    friTime: string;
    satTime: string;
    sunTime: string;
  };

  const getTodayOperatingTime = (data: OperatingTimeData) => {
    const today = dayjs().format('ddd').toLowerCase(); // 'mon', 'tue', 'wed', ...
    switch (today) {
      case 'mon':
        return formatOperatingTime(data.monTime);
      case 'tue':
        return formatOperatingTime(data.tueTime);
      case 'wed':
        return formatOperatingTime(data.wedTime);
      case 'thu':
        return formatOperatingTime(data.thuTime);
      case 'fri':
        return formatOperatingTime(data.friTime);
      case 'sat':
        return formatOperatingTime(data.satTime);
      case 'sun':
        return formatOperatingTime(data.sunTime);
      default:
        return '00:00-00:00';
    }
  };

  const getTodayOperatingTimeSafely = (
    marker: AEDResponse | CivilShelterResponse | EOShelterResponse | ETShelterResponse,
  ): string => {
    if (
      'monTime' in marker &&
      'tueTime' in marker &&
      'wedTime' in marker &&
      'thuTime' in marker &&
      'friTime' in marker &&
      'satTime' in marker &&
      'sunTime' in marker
    ) {
      // marker가 모든 OperatingTimeData 속성을 포함하는지 확인
      return getTodayOperatingTime(marker as OperatingTimeData);
    }
    return 'N/A'; // OperatingTimeData가 아닌 경우의 기본 반환 값
  };

  return (
    <>
      <Container
        display="flex"
        flexDirection="column"
        padding={16}
        gap={16}
        backgroundColor="backgroundNormalPrimary"
      >
        <Container
          display="flex"
          gap={10}
          style={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
          }}
        >
          <Chips
            size="m"
            variant="primary"
            state={selectedChip === '제세동기' ? 'active' : 'outline'}
            onClick={() => handleChipClick('제세동기')}
          >
            제세동기
          </Chips>
          <Chips
            size="m"
            variant="primary"
            state={selectedChip === '민방위대피소' ? 'active' : 'outline'}
            onClick={() => handleChipClick('민방위대피소')}
          >
            민방위대피소
          </Chips>
          <Chips
            size="m"
            variant="primary"
            state={selectedChip === '지진(옥외)대피소' ? 'active' : 'outline'}
            onClick={() => handleChipClick('지진(옥외)대피소')}
          >
            지진(옥외)대피소
          </Chips>
          <Chips
            size="m"
            variant="primary"
            state={selectedChip === '지진/해일대피소' ? 'active' : 'outline'}
            onClick={() => handleChipClick('지진/해일대피소')}
          >
            지진/해일대피소
          </Chips>
        </Container>
      </Container>
      <Map
        id="map"
        center={{
          lat: lat,
          lng: lon,
        }}
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
        level={2}
        padding={50}
        onCreate={(map) => {
          clearMarkers(); // 마커를 생성하기 전에 먼저 초기화

          clustererRef.current = new kakao.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minLevel: 5,
            gridSize: 80,
            styles: [
              {
                width: '53px',
                height: '52px',
                background:
                  clusterColors[selectedChip as keyof typeof clusterColors] || 'rgba(0, 0, 0, 0.5)',
                borderRadius: '50%',
                color: '#fff',
                textAlign: 'center',
                lineHeight: '54px',
                fontWeight: 'bold',
              },
            ],
          });

          const markers = currentData.map(
            (item: AEDResponse | CivilShelterResponse | EOShelterResponse | ETShelterResponse) => {
              const marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(item.lat, item.lon),
                image:
                  selectedMarker?.id === item.id
                    ? new kakao.maps.MarkerImage(
                        selectedMarkerImage.src,
                        new kakao.maps.Size(
                          selectedMarkerImage.size.width,
                          selectedMarkerImage.size.height,
                        ),
                        {
                          offset: new kakao.maps.Point(
                            selectedMarkerImage.options.offset.x,
                            selectedMarkerImage.options.offset.y,
                          ),
                        },
                      )
                    : new kakao.maps.MarkerImage(
                        defaultMarkerImage.src,
                        new kakao.maps.Size(
                          defaultMarkerImage.size.width,
                          defaultMarkerImage.size.height,
                        ),
                        {
                          offset: new kakao.maps.Point(
                            defaultMarkerImage.options.offset.x,
                            defaultMarkerImage.options.offset.y,
                          ),
                        },
                      ),
              });
              kakao.maps.event.addListener(marker, 'click', () => handleMarkerClick(item));
              markersRef.current.push(marker); // 마커들을 배열에 추가
              return marker;
            },
          );

          clustererRef.current.addMarkers(markers);
        }}
      >
        <MapMarker
          position={{
            lat: lat,
            lng: lon,
          }}
        />
      </Map>
      {selectedMarker && (
        <Container
          display="flex"
          width={'100%'}
          padding={16}
          style={{
            position: 'absolute',
            bottom: 0,
            zIndex: 999,
          }}
        >
          <MapBottomSheet
            title={
              selectedChip === '제세동기' && 'buildPlace' in selectedMarker
                ? selectedMarker.buildPlace || '-'
                : 'name' in selectedMarker
                  ? selectedMarker.name || '-'
                  : '-'
            }
            infos={[
              {
                title: selectedChip === '제세동기' ? '가동 시간' : '주소',
                content:
                  selectedChip === '제세동기'
                    ? getTodayOperatingTimeSafely(selectedMarker)
                    : selectedMarker?.detailAddress || '-',
              },
              {
                title: selectedChip === '제세동기' ? '전화번호' : '상세 위치',
                content:
                  selectedChip === '제세동기' && 'tel' in selectedMarker
                    ? selectedMarker.tel || '-'
                    : 'name' in selectedMarker
                      ? selectedMarker.name || '-'
                      : '-',
              },
            ]}
            badgeText={selectedChip}
            subText={
              selectedMarker ? ` ${selectedMarker.gugun} ${selectedMarker.detailAddress}` : '-'
            }
            buttonText="길찾기"
            subButtonIcon="call"
          />
        </Container>
      )}
    </>
  );
}
