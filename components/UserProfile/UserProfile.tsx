import Link from 'next/link';
import { Button, Grid } from '@mantine/core';
import { Routes } from 'common/routes';
import { UserContext } from 'utils/contexts';
import { auth } from 'utils/firebase';
import { useContext } from 'react';
import { useTranslation } from 'utils/hooks';

export const UserProfile = () => {
  const [t] = useTranslation();
  const { userProfile } = useContext(UserContext);

  return (
    <Grid>
      <Grid.Col span={6}>
        {userProfile && (
          <Link href={Routes.UserProfile}>{userProfile?.email}</Link>
        )}
      </Grid.Col>
      <Grid.Col span={6}>
        <Button onClick={() => auth.signOut()}>
          {t('buttonLabel.logOut')}
        </Button>
      </Grid.Col>
    </Grid>
  );
};
