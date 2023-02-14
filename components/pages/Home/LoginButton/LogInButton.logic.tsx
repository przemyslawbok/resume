import router from 'next/dist/client/router';
import { Routes } from 'common/routes';
import { auth, googleAuthProvider } from 'utils/firebase';

export const googleSignIn = async () => {
  try {
    await auth.signInWithPopup(googleAuthProvider);
    router.push(Routes.Admin);
  } catch (e) {
    console.log(
      '%c 👁️: onClick -> e ',
      'font-size:16px;background-color:#e3f329;color:black;',
      e
    );
  }
};
