import { Button } from '@mantine/core';
import { FC } from 'react';
import { LoginIcon } from 'components/svgs/LoginIcon';
import { googleSignIn } from './LogInButton.logic';
import { useTranslation } from 'utils/hooks';

export const LogInButton: FC = () => {
  const [t] = useTranslation();

  return (
    <Button onClick={googleSignIn} leftIcon={<LoginIcon fill={'white'} />}>
      {t('buttonLabel.logIn')}
    </Button>
  );
};
