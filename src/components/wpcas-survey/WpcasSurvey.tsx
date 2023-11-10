'use client';

import React, { useEffect, useState } from 'react';

import { outfit } from '@/components/FontFamily';
import SurveyCard from '@/components/wpcas-survey/SurveyCard';

import { getUsers } from '@/services/services';
import { SurveyType } from '@/type/type';

const WpcasSurvey = () => {
  const surveyForm: { surveyFormId: string; userId: string } = {
    surveyFormId: '2',
    userId: 'abaa7220-5d2e-4e05-842a-95b2c4ce1876',
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getUsers(surveyForm.userId, surveyForm.surveyFormId);
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [surveyForm.surveyFormId, surveyForm.userId]);

  return (
    <div className={`mx-[22px] ${outfit.className}`}>
      <div className='my-[28px] text-xl font-semibold'>WPCAS-Survey</div>
      <div>
        {loading && <div className='mt-[30px] text-center'>Loading...</div>}
        {error && (
          <div className='mt-[30px] text-center'>Something went wrong...</div>
        )}
        {data?.map((survey: SurveyType) => {
          return (
            <SurveyCard key={survey.id} data={survey} surveyForm={surveyForm} />
          );
        })}
      </div>
    </div>
  );
};

export default WpcasSurvey;
