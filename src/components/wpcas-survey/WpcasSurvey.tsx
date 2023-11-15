'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { outfit } from '@/components/FontFamily';
import SurveyCard from '@/components/wpcas-survey/SurveyCard';

import { getUsers } from '@/services/services';
import { SurveyType } from '@/type/type';

const userId: string = localStorage?.getItem('userId') || '';

const WpcasSurvey = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getUsers(userId);
        setData(data);
        setLoading(false);
      } catch (error) {
        // Handle any errors that occur during the API call
        // eslint-disable-next-line no-console
        console.log('Api call error', error);
        router.push('/error/DataNotFound');
      }
    })();
  }, [router]);

  return (
    <div className={`mx-[22px] ${outfit.className}`}>
      <div className='my-[28px] text-xl font-semibold'>WPCAS-Survey</div>
      <div>
        {loading && <div className='mt-[30px] text-center'>Loading...</div>}
        {!loading &&
          data?.map((survey: SurveyType) => {
            return <SurveyCard key={survey.id} data={survey} />;
          })}
      </div>
    </div>
  );
};

export default WpcasSurvey;
