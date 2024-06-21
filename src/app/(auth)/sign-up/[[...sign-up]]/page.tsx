import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage = () => {
  return (
    <main className='container mx-auto flex flex-col items-center justify-center h-screen'>
      <SignUp />
    </main>
  );
};

export default SignUpPage;
