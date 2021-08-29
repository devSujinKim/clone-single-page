import React from 'react';
import Head from 'next/head';
import propTypes from 'prop-types';
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

App.propTypes = {
  Component: propTypes.any.isRequired,
  pageProps: propTypes.object.isRequired,
};

export default App;
