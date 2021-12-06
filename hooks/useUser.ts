import { useState, useEffect } from 'react';
import { AuthUser, User } from '@customTypes/login';
import { onAuthStateChanged, signOutUser } from '../firebase/client';

export function useUser() {
  const [user, setUser] = useState<AuthUser>({
    status: 'not_known',
    user: null,
  });

  useEffect(() => {
    const unsuscribe = onAuthStateChanged((userAuth: User) => {
      if (!userAuth) return setUser({ status: 'not_logged', user: userAuth });

      return setUser({
        status: 'logged',
        user: userAuth,
      });
    });

    // This is necessary because it cleans up the suscribe on firebase
    return () => unsuscribe();
  }, []);

  return {
    user: user.user,
    status: user.status,
    signOut: () => signOutUser(),
  };
}
