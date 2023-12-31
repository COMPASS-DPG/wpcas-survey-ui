'use client';
import Head from 'next/head';
import { useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';

import LoadingScreen from '@/components/wpcas-survey/LoadingScreen';

import { getUsers } from '@/services/services';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    let userId: string = localStorage?.getItem('userId') || '';
    const queryId = searchParams.get('userId') || '';
    if (queryId.trim() !== '') {
      userId = queryId;
      localStorage.setItem('userId', queryId);
    }
    (async () => {
      try {
        const data = await getUsers(userId);
        localStorage.setItem('userData', JSON.stringify(data));
        router.push('/wpcas-survey');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Api call error', error);
        // Handle any errors that occur during the API call
        setTimeout(() => {
          router.push('/error/DataNotFound');
        }, 5000);
      }
    })();
  }, [router, searchParams]);

  return (
    <main>
      <Head>
        <title>WPCAS-Survey</title>
      </Head>
      <section className='bg-white'>
        <LoadingScreen />
      </section>
    </main>
  );
}
