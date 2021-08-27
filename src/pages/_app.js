import React from 'react';
import Head from 'next/head';
import { Global } from '@emotion/react';
import '../globalStyles.css';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Single Page</title>
    </Head>
    <Global />
    <Component {...pageProps} />
  </>
);

export default App;
