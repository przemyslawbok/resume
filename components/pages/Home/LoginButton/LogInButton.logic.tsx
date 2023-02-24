import router from 'next/dist/client/router';
import toast from 'react-hot-toast';
import { Routes } from 'common/routes';
import { auth, googleAuthProvider } from 'utils/firebase';

export const googleSignIn = async () => {
  try {
    await auth.signInWithPopup(googleAuthProvider);
    router.push(Routes.Admin);
  } catch (e) {
    // TODO: translate this
    toast.error('Something went wrong while logging in');
  }
};
