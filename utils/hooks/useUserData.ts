/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { User } from 'db/model';
import { auth } from 'utils/firebase';
import { db } from 'db';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';

export const useUserData = () => {
  const [user] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState<User | undefined>();

  useEffect(() => {
    let unsubscribe;

    if (user) {
      try {
        // get document ref
        const ref = db.user(user.uid);

        // try to fetch data for userProfile
        unsubscribe = ref.onSnapshot((doc) => {
          if (doc.data()) {
            const data: User = { id: user.uid, ...doc.data() };
            setUserProfile(data);
          }
        });

        // if not found, create user profile
        if (!userProfile) ref.set({ email: user.email });
      } catch (e) {
        console.log(
          '%c 😜: useUserData -> e ',
          'font-size:16px;background-color:#2e89b9;color:white;',
          e
        );
      }
    } else {
      setUserProfile(undefined);
    }

    return unsubscribe;
  }, [user]);

  return { user, userProfile };
};
