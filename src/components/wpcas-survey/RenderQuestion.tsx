'use client';
import React from 'react';

import { outfit } from '@/components/FontFamily';

import { questionType } from '@/app/wpcas-survey/[id]/page';

import RadioInput from './RadioInput';

type PropType = {
  currentGroup: number;
  questions: questionType[];
  handleAnswerChange: (index: number, text: string) => void;
  answers: string[];
};

const RenderQuestion = ({
  currentGroup,
  questions,
  handleAnswerChange,
  answers,
}: PropType) => {
  const start = (currentGroup - 1) * 5;
  const end = currentGroup * 5;

  return (
    <div className={`mb-12 ${outfit.className}`}>
      {questions
        ?.slice(start, end)
        .map((question: questionType, index: number) => (
          <div key={index} className='mb-[25px]'>
            <p className='text-base text-[#272728]'>
              {(currentGroup - 1) * 5 + index + 1}. {question?.question}
            </p>
            <div className='mt-2'>
              <div className='flex space-x-4'>
                <RadioInput
                  value='Yes'
                  onChange={() => handleAnswerChange(index, 'Yes')}
                  checked={answers[(currentGroup - 1) * 5 + index] === 'Yes'}
                  name={`question-${index}`}
                  label='Yes'
                />
                <RadioInput
                  value='No'
                  onChange={() => handleAnswerChange(index, 'No')}
                  checked={answers[(currentGroup - 1) * 5 + index] === 'No'}
                  name={`question-${index}`}
                  label='No'
                />
                <RadioInput
                  value='DoNotKnow'
                  onChange={() => handleAnswerChange(index, 'DoNotKnow')}
                  checked={
                    answers[(currentGroup - 1) * 5 + index] === 'DoNotKnow'
                  }
                  name={`question-${index}`}
                  label="Don't Know"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RenderQuestion;
