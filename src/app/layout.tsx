import { Metadata } from 'next';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import 'react-toastify/dist/ReactToastify.css';

import ConnectionCheckWrapper from '@/components/errorScreen/ConnectionCheckWrapper';
import PullRefresh from '@/components/pullRefresh/PullRefresh';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  title: 'Compass Wpcas-survey demo',

  description:
    'Introducing Wpcas-survey, a platform where assessors and assesses can provide and receive feedback tailored to their competency',
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/samagra_logo.jpg',
    shortcut: '/favicon/samagra_logo.jpg',
    apple: '/favicon/samagra_logo.jpg',
  },
  // manifest: `/favicon/site.webmanifest`,
  // openGraph: {
  //   url: siteConfig.url,
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   siteName: siteConfig.title,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   type: 'website',
  //   locale: 'en_US',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   // creator: '@th_clarence',
  // },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ConnectionCheckWrapper>
          <PullRefresh>
            <>
              {children}
              <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
              />
            </>
          </PullRefresh>
        </ConnectionCheckWrapper>
      </body>
    </html>
  );
}
