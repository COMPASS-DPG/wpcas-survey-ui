'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Navbar from '@/components/navbar/Navbar';
import Spinner from '@/components/wpcas-survey/Spinner';
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // array of empty answers for questions
  const [answers, setAnswers] = useState<string[]>([]);

  // user details
  const questions: questionType[] = surveyConfig?.questionsJson ?? [];
  const name: string = surveyConfig?.UserMetadata?.userName ?? '';
  const role: string = surveyConfig?.UserMetadata?.designation ?? '';
  const assesseeId: string = surveyConfig?.UserMetadata?.userId ?? '';
  const profilePicture: string =
    surveyConfig?.UserMetadata?.profilePicture ?? '';

  const handleCurrentGroup = (value: number) => {
    setCurrentGroup(value);
  };

  useEffect(() => {
    (async () => {
      try {
        const survey = await getSurveyConfigQuestionById(params?.id);
        setSurveyConfig(survey);
        setLoading(false);
        // array of empty answers for no of questions
        setAnswers(Array(survey.questionsJson.length).fill(''));
      } catch (error) {
        // Handle any errors that occur during the API call
        // eslint-disable-next-line no-console
        console.log('Api call error', error);
        setLoading(false);
        setError(true);
        toast.error('something went wrong');
      }
    })();
  }, [params?.id]);

  return (
    <>
      <Navbar heading='Feedback Survey' />
      {loading && <Spinner />}
      {error && <div className='mt-[50px] text-center'>error...</div>}

      {!loading && !error && (
        <div>
          {currentGroup === 1 && (
            <SurveyProfile
              name={name}
              role={role}
              profilePicture={profilePicture}
            />
          )}
          <SurveyForm
            assesseeId={assesseeId}
            questions={questions}
            currentGroup={currentGroup}
            setCurrentGroup={(value: number) => handleCurrentGroup(value)}
            answers={answers}
            handleAnswer={(value: string[]) => setAnswers(value)}
          />
        </div>
      )}
    </>
  );
};

export default Page;
