import React, { useEffect } from 'react';
import { AuthContext, GoogleAuthContext } from './contexts';
import { useLocalStorage } from '../../hooks';
import firebase from 'firebase';

export type User = firebase.auth.UserCredential | null;

const useAuth = () => {
  const googleAuth = React.useContext(GoogleAuthContext);
  const firebaseAuth = React.useContext(AuthContext);
  const [localUser, setLocalUser] = useLocalStorage<User>('user', null);

  const [user, setUser] = React.useState<User>(localUser ?? null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const updateUser = (newUser: firebase.auth.UserCredential) => {
    setUser(newUser);
    setLocalUser(newUser);
  };

  const checkUserStatus = async () => {
    try {
      setLoading(true);
      const id = localUser.credential.idToken;
      const newUser = await firebaseAuth.signInWithCredential(id);
      setLoading(false);
      updateUser(newUser);
    } catch (error) {
      handleUserError(error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      const newUser = await firebaseAuth.signInWithPopup(googleAuth);
      setLoading(false);
      updateUser(newUser);
    } catch (error) {
      handleUserError(error);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await firebaseAuth.signOut();
      setLoading(false);
      updateUser(null);
    } catch (error) {
      handleUserError(error);
    }
  };

  const handleUserError = (error) => {
    console.log(error);
    setLoading(false);
    setError(error.message);
  };

  useEffect(() => {
    if (localUser?.credential.idToken && !user) {
      checkUserStatus();
    }
  }, []);

  return [
    { loading, error, user },
    { login: loginWithGoogle, logout },
  ];
};

export default useAuth;
