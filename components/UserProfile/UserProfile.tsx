import Link from 'next/link';
import { Button, Flex, Group, Text, createStyles } from '@mantine/core';
import { Routes } from 'common/routes';
import { UserContext } from 'utils/contexts';
import { auth } from 'utils/firebase';
import { useContext } from 'react';
import { useTranslation } from 'utils/hooks';

const useStyles = createStyles((useTheme) => ({
  profileLink: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: useTheme.radius.sm,
    textDecoration: 'none',
    color:
      useTheme.colorScheme === 'dark'
        ? useTheme.colors.dark[0]
        : useTheme.colors.gray[7],
    fontSize: useTheme.fontSizes.sm,
    fontWeight: 500,
    cursor: 'pointer',
    minWidth: 75,
    textAlign: 'center',

    '&:hover': {
      backgroundColor:
        useTheme.colorScheme === 'dark'
          ? useTheme.colors.dark[6]
          : useTheme.colors.gray[0],
    },
  },
}));

export const UserProfile = () => {
  const { email } = useContext(UserContext);
  const [t] = useTranslation();
  const { classes } = useStyles();

  return (
    <Flex
      mih={40}
      gap="md"
      justify="flex-end"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Group>
        <Link href={Routes.UserProfile}>
          <Text className={classes.profileLink}>{email}</Text>
        </Link>
      </Group>
      <Group>
        <Button onClick={() => auth.signOut()} size="sm">
          {t('buttonLabel.logOut')}
        </Button>
      </Group>
    </Flex>
  );
};
