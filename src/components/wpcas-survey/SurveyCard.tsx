'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { SurveyType } from '@/type/type';

import ProfileImage from '~/images/profile.png';
import FeedbackSuccessIcon from '~/svg/feedbackSuccessIcon.svg';

type PropType = {
  data: SurveyType;
};

const SurveyCard = ({ data }: PropType) => {
  const surveyForm: { surveyFormId: number; userId: string } = {
    surveyFormId: 2,
    userId: 'abaa7220-5d2e-4e05-842a-95b2c4ce1876',
  };
  const date: string = new Date(
    data?.surveyForm?.surveyCycleParameter.endTime
  ).toLocaleDateString('en-GB');

  return (
    <div
      className='border-[rgba(101, 117, 140, 0.20)] my-3 max-w-[700px] 
    rounded-md border border-solid p-[14px]'
    >
      <div className='flex items-start justify-between'>
        <div className='mb-6 flex gap-2'>
          <div>
            <Image
              src={ProfileImage}
              alt='profile image'
              width={44}
              height={44}
            ></Image>
          </div>
          <div>
            <p className='text-base font-medium text-[#272728]'>
              {data?.Assessor?.userName}
            </p>
            <p className='text-sm font-normal text-[#65758C]'>
              {data?.Assessor?.designation}
            </p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between gap-2'>
        {data?.status === 'PENDING' ? (
          <Link
            className='h-9 w-[50%] rounded bg-[#385B8B] px-2 py-2 text-center text-sm
             font-semibold text-[#FFF]'
            href={{
              pathname: `/wpcas-survey/${data?.assessorId}`,
              query: surveyForm,
            }}
          >
            Give Feedback
          </Link>
        ) : (
          <div className='flex  w-[50%] items-center '>
            <div>
              <FeedbackSuccessIcon className='mr-[10px] w-[18px]' />
            </div>
            <div className='text-sm font-medium text-[#4ACB5F]'>
              Provided feedback
            </div>
          </div>
        )}
        <div className='w-[50%] text-right text-sm font-semibold '>
          Survey Deadline:
          <span className='text-sm font-medium text-gray-300'> {date}</span>
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
