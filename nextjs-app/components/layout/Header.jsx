import { LoggingButtons } from '@/lib/auth/LoggingButtons.jsx';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0
 */
export default function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <header className='flex w-[100%] primary-c justify-between px-14'>
      <div className='flex justify-between'>
        <a href='https://www.humanrightsfirst.org/' target="_blank" rel="noopener noreferrer">
          <img className='w-[100px]' src='/assets/logo.png' alt='HRF logo white' />
        </a>
      </div>
      <div className='flex items-center py-4 gap-16'>
        <Link href='/' className='nav-btn'>
          Home
        </Link>
        <Link href='/graphs' className='nav-btn'>
          Graphs
        </Link>
        {isAuthenticated && (
          <Link href='/profile' className='nav-btn'>
            Profile
          </Link>
        )}
        <LoggingButtons />
      </div>
    </header>
  );
}
