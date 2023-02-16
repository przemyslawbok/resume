import Link from 'next/link';
import { Flex, Grid, Space } from '@mantine/core';
import { Routes } from 'common/routes';
import { UserProfile } from 'components/UserProfile';
import { useTranslation } from 'utils/hooks';

export const NavBar = () => {
  const [t] = useTranslation();
  return (
    <Grid>
      <Grid.Col span={8}>
        <Flex
          gap="xl"
          justify="center"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <Link href={Routes.Admin}>{t('navBar.admin')}</Link>
          <Space w="md" />
          <Link href={Routes.Resume}>{t('navBar.resume')}</Link>
        </Flex>
      </Grid.Col>
      <Grid.Col span={4}>
        <UserProfile />
      </Grid.Col>
    </Grid>
  );
};
