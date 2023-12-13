import { useRouter } from 'next/navigation';
import React from 'react';

import FeedbackIcon from '~/svg/feedbackIcon.svg';

type PropType = {
  onClose: () => void;
};

const FeedbackSuccess = ({ onClose }: PropType) => {
  const router = useRouter();
  const handleClose = () => {
    onClose();
    router.push('/');
  };

  return (
    <div>
      <div className='mt-[20px] text-center text-[22px] font-semibold text-[#272728]'>
        Thankyou for your feedback!
      </div>
      <div className='my-[20px] flex justify-center'>
        <FeedbackIcon className='w-[60px]' />
      </div>
      <div className='mb-[40px] text-center text-base text-[#65758C] '>
        Your feedback will help to improve Employee performance
      </div>
      <div className='my-4 flex justify-center gap-2 px-2'>
        <button
          onClick={handleClose}
          className='w-[50%] rounded-md bg-[#EEF5FF] px-4 py-2 text-[12px]
             font-medium text-[#385B8B]'
        >
          Close
        </button>
        <button
          onClick={handleClose}
          className='w-[50%] rounded-md bg-[#385B8B] px-4 py-2 text-[12px] font-medium text-white'
        >
          Give next feedback
        </button>
      </div>
    </div>
  );
};

export default FeedbackSuccess;
