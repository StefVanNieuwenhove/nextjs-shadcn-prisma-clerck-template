import { UserProfile } from '@clerk/nextjs';

const UserProfilePage = () => {
  return (
    <main className='flex flex-col items-center justify-center h-full w-full'>
      <UserProfile path='/user-profile' />
    </main>
  );
};

export default UserProfilePage;
