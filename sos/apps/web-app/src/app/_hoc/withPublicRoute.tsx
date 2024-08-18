'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import React, { ComponentType } from 'react';
import Loading from '../_components/Loading';

interface WithPublicRouteOptions {
  redirectPath?: string;
  loadingComponent?: React.ReactNode;
}

function withPublicRoute<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: WithPublicRouteOptions = {},
) {
  const { redirectPath = '/', loadingComponent = <Loading /> } = options;

  return function WithPublicRouteComponent(props: P) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkAuth = () => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        if (accessToken && refreshToken) {
          // 토큰이 존재하면 리다이렉트
          router.replace(redirectPath);
        } else {
          // 토큰이 없으면 로딩 상태 해제
          setIsLoading(false);
        }
      };

      checkAuth();
    }, [router]);

    if (isLoading) {
      return loadingComponent as JSX.Element;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withPublicRoute;
