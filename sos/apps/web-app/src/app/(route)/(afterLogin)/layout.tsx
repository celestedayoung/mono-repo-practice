'use client';

import withAuth from '@/app/_hoc/withAuth';
interface Props {
  children: React.ReactNode;
}

const AfterLoginLayout = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default withAuth(AfterLoginLayout);
