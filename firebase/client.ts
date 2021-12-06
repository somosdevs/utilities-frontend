import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  User,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBSeedrLFibQo2dGVWrrqzs1DLjPnp_Rks',
  authDomain: 'utilities-2b3bc.firebaseapp.com',
  projectId: 'utilities-2b3bc',
  storageBucket: 'utilities-2b3bc.appspot.com',
  messagingSenderId: '146162529404',
  appId: '1:146162529404:web:e2f6ade01cbcc85002c5f9',
  measurementId: 'G-FRKMQSC37P',
};

// eslint-disable-next-line no-unused-expressions
!getApps().length && initializeApp(firebaseConfig);

const filterUserDataFromAuth = (user: User) => {
  const {
    displayName,
    photoURL,
    email,
    uid,
  } = user;

  return {
    username: displayName,
    avatar: photoURL,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange: any) => (
  getAuth().onAuthStateChanged((user) => {
    const normalizedUser = user ? filterUserDataFromAuth(user) : null;
    onChange(normalizedUser);
  })
);

export const signInGithub = () => {
  const githubProvider = new GithubAuthProvider();
  return signInWithPopup(getAuth(), githubProvider);
};

export const signOutUser = () => {
  const auth = getAuth();
  return signOut(auth);
};
