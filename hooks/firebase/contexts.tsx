import React from 'react';
import firebase from 'firebase/app';
import { auth, database, googleAuthProvider } from './config';

export const AuthContext = React.createContext<firebase.auth.Auth | null>(null);

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const GoogleAuthContext = React.createContext<firebase.auth.GoogleAuthProvider | null>(null);

export const GoogleAuthProvider = ({ children }) => {
  return (
    <GoogleAuthContext.Provider value={googleAuthProvider}>{children}</GoogleAuthContext.Provider>
  );
};

export const DatabaseContext = React.createContext<firebase.database.Database | null>(null);

export const DatabaseProvider = ({ children }) => {
  return <DatabaseContext.Provider value={database}>{children}</DatabaseContext.Provider>;
};
