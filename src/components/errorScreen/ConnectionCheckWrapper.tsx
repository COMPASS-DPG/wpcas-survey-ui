'use client';
import React from 'react';
import { Detector } from 'react-detect-offline';

import NoInternetConnectionError from '@/components/errorScreen/NoInternetConnectionError';

type ChildrenType = {
  children: React.ReactNode;
};

const ConnectionCheckWrapper = ({ children }: ChildrenType) => {
  return (
    <div>
      <Detector
        render={({ online }: { online: boolean }) => (
          <> {online ? <>{children}</> : <NoInternetConnectionError />}</>
        )}
      />
    </div>
  );
};

export default ConnectionCheckWrapper;
