import Head from 'next/head';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <>
        <Head>
          <title>Фильмы и точка</title>
          <meta name="description" content="Сборник лучших курсов эве" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
      )
      ;
}
