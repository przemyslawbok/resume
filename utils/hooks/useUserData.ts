/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { auth } from 'utils/firebase';
import { db } from 'db';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';

export const useUserData = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');

  useEffect(() => {
    let unsubscribe;

    if (user) {
      try {
        // TODO: add typing, extract to function
        const ref = db.users.doc(user.uid);
        unsubscribe = ref.onSnapshot((doc) => {
          const docEmail = doc.data()?.email;
          if (docEmail) setEmail(docEmail);
        });
      } catch (e) {
        console.log(
          '%c 😜: useUserData -> e ',
          'font-size:16px;background-color:#2e89b9;color:white;',
          e
        );
      }
    } else {
      setEmail('');
    }

    return unsubscribe;
  }, [user]);

  return { user, email };
};
