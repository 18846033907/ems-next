/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../store';
import '../styles/globals.less';

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Head>
          <title>My new cool app</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  );
}

export default MyApp;
