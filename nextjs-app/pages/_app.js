import '@/styles/globals.css'; // We'll move global styles here
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { UserProvider } from '@auth0/nextjs-auth0/client'; // Auth0 Provider

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <div className='font-serif w-[100vw] h-[100vh] m-0 flex flex-col justify-between items-center text-center min-h-screen secondary-c'>
        <Header />
        <main className="flex-grow w-full flex flex-col items-center justify-center">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default MyApp;
