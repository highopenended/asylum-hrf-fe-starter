import Logo from '@/assets/logo.png'; // Adjusted path, assuming logo moves to nextjs-app/public/assets
import Link from 'next/link';
// import { LoggingButtons } from '@/auth/LoggingButtons'; // We'll need to recreate or adapt LoggingButtons
import { useUser } from '@auth0/nextjs-auth0/client'; // Next.js Auth0 hook

/**
 * TODO: Ticket 3: (Now part of Next.js migration)
 * Implement authentication using Auth0 with @auth0/nextjs-auth0
 */
export default function Header() {
  const { user, error, isLoading } = useUser(); // Updated Auth0 hook

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <header className='flex w-[100%] primary-c justify-between px-14'>
      <div className='flex justify-between'>
        <Link href='https://www.humanrightsfirst.org/'>
          {/* Assuming Logo is an image. If it's an SVG component, it might need different handling. */}
          {/* For Next.js Image optimization, this would ideally be <Image src={Logo} ... /> */}
          <img className='w-[100px]' src='/assets/logo.png' alt='HRF logo white' />
        </Link>
      </div>
      <div className='flex items-center py-4 gap-16'>
        <Link href='/' className='nav-btn'>
          Home
        </Link>
        <Link href='/graphs' className='nav-btn'>
          Graphs
        </Link>
        {user && ( // Check if user exists (authenticated)
          <Link href='/profile' className='nav-btn'>
            Profile
          </Link>
        )}
        {/* <LoggingButtons /> */}
        {/* Placeholder for login/logout buttons. We'll need to implement these using Next.js Auth0. */}
        {!user && <a href="/api/auth/login" className='nav-btn'>Login</a>}
        {user && <a href="/api/auth/logout" className='nav-btn'>Logout</a>}
      </div>
    </header>
  );
} 