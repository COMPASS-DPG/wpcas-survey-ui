import React from 'react';

const LoadingScreen = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-blue-500'></div>
      <p className='mt-4 text-lg font-semibold text-gray-600'>
        Loading Your WPCAS Surveys...
      </p>
    </div>
  );
};

export default LoadingScreen;
