import React from 'react';

import { outfit } from '@/components/FontFamily';
import SurveyCard from '@/components/wpcas-survey/SurveyCard';

import { getUsers } from '@/services/services';
import { SurveyType } from '@/type/type';

const WpcasSurvey = async () => {
  const surveys = await getUsers();
  return (
    <div className={`mx-[22px] ${outfit.className}`}>
      <div className='my-[28px] text-xl font-semibold'>WPCAS-Survey</div>
      <div>
        {surveys?.map((survey: SurveyType) => {
          return <SurveyCard key={survey.name} data={survey} />;
        })}
      </div>
    </div>
  );
};

export default WpcasSurvey;
