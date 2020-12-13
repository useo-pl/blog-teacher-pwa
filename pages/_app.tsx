import React from 'react';
import { AuthProvider, DatabaseProvider, GoogleAuthProvider } from '../hooks/firebase/contexts';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <GoogleAuthProvider>
          <DatabaseProvider>
            <Component {...pageProps} />
          </DatabaseProvider>
        </GoogleAuthProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
