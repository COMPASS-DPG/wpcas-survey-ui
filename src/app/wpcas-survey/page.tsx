'use client';
import React, { useEffect, useState } from 'react';

import { outfit } from '@/components/FontFamily';
import SurveyCard from '@/components/wpcas-survey/SurveyCard';
import SurveyNotFound from '@/components/wpcas-survey/SurveyNotFound';

import { SurveyType } from '@/type/type';

const WpcasSurvey = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // for getting surveys from local storage
    const data = localStorage.getItem('userData') || '';
    if (data !== '') {
      setData(JSON.parse(data));
    }
  }, []);

  return (
    <div className={`mx-[22px] ${outfit.className}`}>
      <div className='my-[28px] text-xl font-semibold'>WPCAS-Survey</div>
      <div>
        {data?.length === 0 && <SurveyNotFound />}
        {data?.length !== 0 &&
          data?.map((survey: SurveyType) => {
            return <SurveyCard key={survey.id} data={survey} />;
          })}
      </div>
    </div>
  );
};

export default WpcasSurvey;
