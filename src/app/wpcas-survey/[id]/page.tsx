'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Navbar from '@/components/navbar/Navbar';
import { SurveyForm } from '@/components/wpcas-survey/SurveyForm';
import SurveyProfile from '@/components/wpcas-survey/SurveyProfile';

import { getSurveyConfigQuestionById } from '@/services/services';
import { SurveyFormType } from '@/type/type';

export type questionType = {
  questionId: string;
  question: string;
};

const Page = ({ params }: { params: { id: string } }) => {
  const [currentGroup, setCurrentGroup] = useState(1);
  const [surveyConfig, setSurveyConfig] = useState<SurveyFormType>();

  // array of empty answers for questions
  const [answers, setAnswers] = useState<string[]>([]);

  const questions: questionType[] = surveyConfig?.questionsJson ?? [];
  const name: string =
    surveyConfig?.UserMetadata?.userName ?? 'name is remaining';
  const role: string = surveyConfig?.UserMetadata?.designation ?? '';
  const assesseeId: string = surveyConfig?.UserMetadata?.userId ?? '';

  const handleCurrentGroup = (value: number) => {
    setCurrentGroup(value);
  };

  useEffect(() => {
    (async () => {
      try {
        const survey = await getSurveyConfigQuestionById(params?.id);
        setSurveyConfig(survey);
        // array of empty answers for no of questions
        setAnswers(Array(survey.questionsJson.length).fill(''));
      } catch (error) {
        toast.error('something went wrong');
      }
    })();
  }, [params?.id]);

  return (
    <>
      <Navbar heading='Feedback Survey' />
      <div>
        {currentGroup === 1 && <SurveyProfile name={name} role={role} />}
        <SurveyForm
          assesseeId={assesseeId}
          questions={questions}
          currentGroup={currentGroup}
          setCurrentGroup={(value: number) => handleCurrentGroup(value)}
          answers={answers}
          handleAnswer={(value: string[]) => setAnswers(value)}
        />
      </div>
    </>
  );
};

export default Page;
