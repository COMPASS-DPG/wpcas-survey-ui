'use client';
import React from 'react';

import { outfit } from '@/components/FontFamily';

import RadioInput from './RadioInput';

type PropType = {
  currentGroup: number;
  questions: string[];
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
      {questions?.slice(start, end).map((question: string, index: number) => (
        <div key={index} className='mb-[25px]'>
          <p className='text-base text-[#272728]'>
            {(currentGroup - 1) * 5 + index + 1}. {question}
          </p>
          <div className='mt-2'>
            <div className='flex space-x-4'>
              <RadioInput
                value='Yes'
                onChange={() => handleAnswerChange(index, 'Yes')}
                checked={answers[(currentGroup - 1) * 5 + index] === 'Yes'}
                name={`question-${index}`}
              />
              <RadioInput
                value='No'
                onChange={() => handleAnswerChange(index, 'No')}
                checked={answers[(currentGroup - 1) * 5 + index] === 'No'}
                name={`question-${index}`}
              />
              <RadioInput
                value="Don't Know"
                onChange={() => handleAnswerChange(index, "Don't Know")}
                checked={
                  answers[(currentGroup - 1) * 5 + index] === "Don't Know"
                }
                name={`question-${index}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderQuestion;
