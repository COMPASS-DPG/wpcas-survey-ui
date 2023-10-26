'use client';
import React, { useEffect, useState } from 'react';

import Navbar from '@/components/navbar/Navbar';
import { SurveyForm } from '@/components/wpcas-survey/SurveyForm';
import SurveyProfile from '@/components/wpcas-survey/SurveyProfile';

import { getSurveyConfigQuestionById } from '@/services/services';
import { SurveyType } from '@/type/type';

const Page = ({ params }: { params: { id: string } }) => {
  const [currentGroup, setCurrentGroup] = useState(1);
  const [surveyConfig, setSurveyConfig] = useState<SurveyType>();

  // array of empty answers for questions
  const [answers, setAnswers] = useState<string[]>([]);

  // const survey = surveys?.find((item) => item?.id == params?.id);

  const questions: string[] = surveyConfig?.questions ?? [];
  const name: string = surveyConfig?.name ?? '';
  const role: string = surveyConfig?.role ?? '';

  const handleCurrentGroup = (value: number) => {
    setCurrentGroup(value);
  };

  const handleFetch = async (id: string) => {
    const survey = await getSurveyConfigQuestionById(id);
    setSurveyConfig(survey);
    // array of empty answers for no of questions
    setAnswers(Array(survey.questions.length).fill(''));
  };

  useEffect(() => {
    // run npm run server to start json-server
    handleFetch(params?.id);
  }, [params?.id]);

  return (
    <>
      <Navbar heading='Feedback Survey' />
      <div>
        {currentGroup === 1 && <SurveyProfile name={name} role={role} />}
        <SurveyForm
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
