'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

type PropType = {
  heading: string;
};

const Navbar = ({ heading }: PropType) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className='fixed left-0 right-0 top-0 flex items-center bg-white px-[22px] py-1.5'>
      <button
        className='mr-[15px] flex h-11 w-11 cursor-pointer 
    items-center justify-center rounded-md border-2 
    border-solid border-gray-200 hover:bg-gray-100'
        onClick={handleBack}
      >
        <MdOutlineKeyboardArrowLeft size={28} />
      </button>
      <div className='text-xl font-semibold'>{heading}</div>
    </div>
  );
};

export default Navbar;
