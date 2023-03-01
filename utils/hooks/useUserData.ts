/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import toast from 'react-hot-toast';
import { SocialLink, User } from 'db/model';
import { UserRepository, UserSocialLinkRepository } from 'utils/repositories';
import { auth } from 'utils/firebase';
import { db } from 'db';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';

export const useUserData = () => {
  const [user] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState<User | undefined>();
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>();

  useEffect(() => {
    const userRepository = new UserRepository();

    const getUserProfile = async (): Promise<boolean> => {
      const result = await userRepository.getById(user.uid);

      setUserProfile(result);

      return result !== undefined;
    };

    const createUserProfile = async () => {
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

      await userRepository.create(profileData);
    };

    const userSocialLinkRepository = new UserSocialLinkRepository(user.uid);

    const getUserSocialLinks = async () => {
      const result = await userSocialLinkRepository.getAll();

      setSocialLinks(result);
    };

    if (user) {
      try {
        getUserProfile().then((result: boolean) => {
          if (!result) createUserProfile();
          getUserSocialLinks();
        });
      } catch (e) {
        // TODO: translate this
        toast.error('Error fetching from database');
      }
    } else {
      setUserProfile(undefined);
    }

    // don't want to trigger on userProfile change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { user, userProfile, socialLinks };
};
