import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <main className='container mx-auto flex items-center justify-center h-screen'>
      <SignIn />
    </main>
  );
};

export default SignInPage;
