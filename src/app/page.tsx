import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <main className='flex min-h-screen flex-col  items-center  p-24'>
      <div>
        <Button>Hello world</Button>
        <Button>
          <Link href='/sign-in'>Sign in</Link>
        </Button>
        <Button>
          <Link href='/sign-up'>Sign up</Link>
        </Button>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </main>
  );
}
