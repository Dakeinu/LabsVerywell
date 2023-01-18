import React, { useRef, useEffect, useState } from 'react';
import { Layout } from '../components';
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { getPosts } from '../services';

// import {
//   ReCaptcha
// } from 'react-google-recaptcha';
// import axios from 'axios';


function MyApp({ Component, pageProps }: AppProps) {
  // const captchaRef = useRef(null);
  return (
    <div>

      <Layout >

        <Component {...pageProps} />
      </Layout>

    </div >
  )
}

export default MyApp
