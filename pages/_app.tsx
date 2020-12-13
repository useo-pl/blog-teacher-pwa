import React from 'react';
import { AuthProvider, GoogleAuthProvider } from '../hooks/firebase/contexts';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <GoogleAuthProvider>
          <Component {...pageProps} />
        </GoogleAuthProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
