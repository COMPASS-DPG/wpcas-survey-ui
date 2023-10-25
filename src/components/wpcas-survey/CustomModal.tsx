import React from 'react';

type PropsType = {
  isOpen: boolean;
  children: React.ReactNode;
};

const CustomModal = ({ isOpen, children }: PropsType) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
      <div className='modal-backdrop fixed inset-0 bg-black opacity-50'></div>
      <div className='relative mx-auto my-6 w-[80%] max-w-3xl'>
        <div className='modal-content rounded bg-white p-4 shadow-lg'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
