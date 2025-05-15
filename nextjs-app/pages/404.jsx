import Link from 'next/link';
import React from 'react';
import { pageWrapper } from '@/components/layout/PageWrapper.jsx';

export const NotFoundPage = () => {
  const errorContent = (
    <div id='error-page'>
      <h1>404 Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href='/'>
        <button>Back To Home</button>
      </Link>
    </div>
  );

  return pageWrapper(errorContent);
};
