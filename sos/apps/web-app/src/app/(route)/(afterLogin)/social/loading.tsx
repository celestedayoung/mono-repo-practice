'use client';
import { LoadingSpinner } from '@sos/components-react';
export default function Loading() {
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
