import Link from 'next/link';
import {
  Container,
  Group,
  Header,
  MantineProvider,
  Text,
  createStyles,
} from '@mantine/core';
import { Logo } from 'components';
import { Routes } from 'common/routes';
import { UserProfile } from 'components/UserProfile';
import { theme } from 'common/theme';
import { useRouter } from 'next/router';
import { useTranslation } from 'utils/hooks';

export function PageHeader() {
  const [t] = useTranslation();
  // getLinks(t)
  const links = [
    {
      link: Routes.Admin,
      label: t('navBar.admin'),
    },
    {
      link: Routes.Resume,
      label: t('navBar.resume'),
    },
  ];

  const useStyles = createStyles((useTheme) => ({
    root: {
      position: 'relative',
      zIndex: 1,
    },
    header: {
      height: HEADER_HEIGHT,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    link: {
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
    linkActive: {
      '&, &:hover': {
        backgroundColor: useTheme.fn.variant({
          variant: 'light',
          color: useTheme.primaryColor,
        }).background,
        color: useTheme.fn.variant({
          variant: 'light',
          color: useTheme.primaryColor,
        }).color,
      },
    },
  }));

  const active = useRouter().pathname;
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link key={link.link} href={link.link}>
      <Text
        className={cx(classes.link, active === link.link && classes.linkActive)}
      >
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <MantineProvider theme={theme}>
      <Header
        height={60}
        sx={{ borderBottom: 0 }}
        mb={120}
        className={classes.root}
      >
        <Container fluid className={classes.header}>
          <Group>
            <Link href={Routes.Home}>
              <Logo />
            </Link>
          </Group>
          <Group spacing={5}>{items}</Group>
          <UserProfile />
        </Container>
      </Header>
    </MantineProvider>
  );
}
