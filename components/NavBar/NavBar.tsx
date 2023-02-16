import Link from 'next/link';
import {
  Burger,
  Container,
  Group,
  Header,
  Image,
  ThemeIcon,
  createStyles,
} from '@mantine/core';
import { Routes } from 'common/routes';
import { UserProfile } from 'components/UserProfile';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'utils/hooks';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export function NavBar() {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [t] = useTranslation();
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

  const items = links.map((link) => (
    <Link href={link.link} key={link.link}>
      <a className={classes.link}>{link.label}</a>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <ThemeIcon>
            <Link href={Routes.Home}>
              <a>
                <Image src={null} alt="logo" height={40} width={40} />
              </a>
            </Link>
          </ThemeIcon>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <UserProfile />
      </Container>
    </Header>
  );
}
