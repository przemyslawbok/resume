/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import toast from 'react-hot-toast';
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
        if (!userProfile) {
          const profileData: User = {
            avatar: user.photoURL,
            birthday: null,
            email: user.email,
            firstName: user.displayName.split(' ')[0],
            language: '',
            lastName: user.displayName.split(' ')[1],
            nickname: '',
            phone: user.phoneNumber,
            photoUrl: '',
            regDate: new Date(user.metadata.lastSignInTime),
            theme: '',
          };

          ref.set(profileData);
        }
      } catch (e) {
        // TODO: translate this
        toast.error('Error fetching from database');
      }
    } else {
      setUserProfile(undefined);
    }

    return unsubscribe;
    // don't want to trigger on userProfile change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { user, userProfile };
};
