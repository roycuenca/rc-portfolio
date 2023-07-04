import Head from 'next/head';
import { Montserrat } from 'next/font/google';

import '../styles/globals.css';
import NavBar from '../components/Navbar/NavBar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
