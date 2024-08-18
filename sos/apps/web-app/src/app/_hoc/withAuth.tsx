'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import React, { ComponentType } from 'react';
import Loading from '../_components/Loading';

interface WithAuthOptions {
  loginRedirectPath?: string;
  loadingComponent?: React.ReactNode;
}

function withAuth<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: WithAuthOptions = {},
) {
  const { loginRedirectPath = '/login', loadingComponent = <Loading /> } = options;

  return function WithAuthComponent(props: P) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkAuth = () => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        if (accessToken && refreshToken) {
          setIsAuthenticated(true);
        } else {
          router.replace(loginRedirectPath);
        }
        setIsLoading(false);
      };

      checkAuth();
    }, [router]);

    if (isLoading) {
      return loadingComponent as JSX.Element;
    }

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
