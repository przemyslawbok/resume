import { Button } from '@mantine/core';
import { FC } from 'react';
import { googleSignIn } from './LogInButton.logic';
import { useTranslation } from 'utils/hooks';
import { LoginIcon } from 'components';

export const LogInButton: FC = () => {
  const [t] = useTranslation();

  return (
    <Button onClick={googleSignIn} leftIcon={<LoginIcon />}>
      {t('buttonLabel.logIn')}
    </Button>
  );
};
