'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { questionType } from '@/app/wpcas-survey/[id]/page';
import { saveResponse } from '@/services/services';

import CustomModal from './CustomModal';
import FeedbackSuccess from './FeedbackSuccess';
import RenderQuestion from './RenderQuestion';

type PropType = {
  questions: questionType[];
  assesseeId: string;
  currentGroup: number;
  setCurrentGroup: (arg: number) => void;
  answers: string[];
  handleAnswer: (updatedAnswers: string[]) => void;
};

type AnsObjType = {
  answer: string;
  questionId: string;
};

export function SurveyForm({
  questions,
  currentGroup,
  assesseeId,
  setCurrentGroup,
  answers,
  handleAnswer,
}: PropType) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const surveyFormId: string = searchParams.get('formId') ?? '';
  const userId: string = searchParams.get('userId') ?? '';

  // Assuming you have 25 questions, so 5 groups of 5 questions each
  const totalGroups = questions && Math.ceil(questions?.length / 5);

  const checkFilledAns = (answers: string[]) => {
    // loop will check if user fill answer or not
    for (let i = 0; i < answers.length; i++) {
      if (!answers[i]) {
        toast.error(`Please select an option for Question ${i + 1}`);
        return false;
      }
    }
    return true;
  };

  const getAnsObj = (answers: string[], questions: questionType[]) => {
    return questions?.reduce(
      (result: AnsObjType[], question: questionType, index: number) => {
        result.push({
          questionId: question.questionId,
          answer: answers[index],
        });
        return result;
      },
      []
    );
  };

  // handle answers for all questions
  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const updatedAnswers = [...answers];

    updatedAnswers[(currentGroup - 1) * 5 + questionIndex] = answer;
    handleAnswer(updatedAnswers);
  };

  // will handle survey submit and next page
  const handleNext = async () => {
    if (currentGroup < totalGroups) {
      setCurrentGroup(currentGroup + 1);
    } else {
      // will check all answers are filled or not
      if (checkFilledAns(answers)) {
        const answerObj = getAnsObj(answers, questions);

        //request object
        const res = {
          surveyFormId: parseInt(surveyFormId),
          assesseeId,
          assessorId: userId,
          responseJson: answerObj,
        };
        try {
          const response = await saveResponse(res);
          setIsOpen(true);
          return response;
        } catch (error) {
          // Handle any errors that occur during the API call
          // eslint-disable-next-line no-console
          console.log('Api call error', error);
          toast.error('something went wrong try after some time');
        }
      }
    }
  };

  const handlePrevious = () => {
    if (currentGroup > 1) {
      setCurrentGroup(currentGroup - 1);
    }
  };

  return (
    <div
      className={`z-20 w-full px-[22px] pb-8 ${
        currentGroup !== 1 ? 'pt-[75px]' : 'pt-2'
      }  `}
    >
      {/* modal when form submit successful*/}
      <CustomModal isOpen={isOpen}>
        <FeedbackSuccess onClose={() => setIsOpen(false)} />
      </CustomModal>

      {/* Render questions for the current group */}
      <RenderQuestion
        currentGroup={currentGroup}
        questions={questions}
        handleAnswerChange={handleAnswerChange}
        answers={answers}
      />

      <div className='fixed bottom-0 left-0 right-0 bg-white'>
        {/* Display a loader/slider based on the current group */}
        <div
          className='h-[3px] bg-blue-500'
          style={{ width: `${(currentGroup / totalGroups) * 100}%` }}
        ></div>

        {/* Previous, Next and submit buttons */}
        <div className='my-4 mt-4 flex justify-center gap-2 px-2'>
          <button
            onClick={handlePrevious}
            className={`w-[50%] rounded-md bg-[#EEF5FF] px-4 py-2 text-sm
             font-medium text-[#385B8B] ${currentGroup == 1 && 'opacity-60'}`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className='w-[50%] rounded-md bg-[#385B8B] px-4 py-2 text-sm font-medium text-white'
          >
            {currentGroup == totalGroups ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
