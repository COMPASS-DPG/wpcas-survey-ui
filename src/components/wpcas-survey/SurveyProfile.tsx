import Image from 'next/image';
import React from 'react';

import { outfit } from '@/components/FontFamily';

import ProfileImage from '~/images/profile.jpg';

type PropType = {
  name: string;
  role: string;
  profilePicture: string;
};

const SurveyProfile = ({ name, role, profilePicture }: PropType) => {
  return (
    <div className={`text-center ${outfit.className} mb-[35px] mt-[70px]`}>
      <div className='flex items-center justify-center'>
        <Image
          src={profilePicture || ProfileImage}
          alt='profile'
          width={200}
          height={200}
        />
      </div>
      <p className='mt-2 text-center text-base font-medium text-[#272728]'>
        {name}
      </p>
      <p className='text-center text-sm text-[#65758C]'>{role}</p>
    </div>
  );
};

export default SurveyProfile;
