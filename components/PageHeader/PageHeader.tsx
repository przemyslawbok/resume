import Link from 'next/link';
import { Container, Group, Header, Text } from '@mantine/core';
import { HEADER_HEIGHT } from './PageHeader.data';
import { Logo } from 'components';
import { PageHeaderStyles } from './PageHeader.styling';
import { Routes } from 'common/routes';
import { UserProfile } from 'components/UserProfile';
import { getLinks } from './PageHeader.logic';
import { useRouter } from 'next/router';
import { useTranslation } from 'utils/hooks';

export function PageHeader() {
  const [t] = useTranslation();
  const links = getLinks(t);

  const activeLink = useRouter().pathname;
  const items = links.map((link) => (
    <Text key={link.link} className={link.link === activeLink ? 'active' : ''}>
      <Link href={link.link}>{link.label}</Link>
    </Text>
  ));

  return (
    <PageHeaderStyles>
      <Header height={HEADER_HEIGHT}>
        <Container fluid className="header-content">
          <Group>
            <Link href={Routes.Home}>
              <Logo />
            </Link>
          </Group>
          <Group spacing={5} className="nav-links">
            {items}
          </Group>
          <UserProfile />
        </Container>
      </Header>
    </PageHeaderStyles>
  );
}
