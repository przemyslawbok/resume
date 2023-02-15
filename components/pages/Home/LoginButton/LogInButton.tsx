import { Button } from '@mantine/core';
import { FC } from 'react';
import { Routes } from 'common/routes';
import { auth, googleAuthProvider } from 'utils/firebase/firebase';
import { useRouter } from 'next/dist/client/router';
import { LoginIcon } from 'components/svgs/LoginIcon';

export const LogInButton: FC = () => {
  const router = useRouter();

  const onClick = async () => {
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

  return (
    <Button onClick={onClick} leftIcon={<LoginIcon fill={'white'} />}>
      Log In
    </Button>
  );
};
