import Link from 'next/link';
import { Group } from '@mantine/core';
import { HEADER_HEIGHT } from './PageHeader.data';
import {
  HeaderContent,
  HeaderLink,
  HeaderText,
  StyledHeader,
} from './PageHeader.styling';
import { Logo } from 'components';
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
    <HeaderText key={link.link} isActive={link.link === activeLink}>
      <HeaderLink href={link.link}>{link.label}</HeaderLink>
    </HeaderText>
  ));

  return (
    <StyledHeader height={HEADER_HEIGHT}>
      <HeaderContent fluid>
        <Group>
          <Link href={Routes.Home}>
            LOGO
            {/* <Logo /> */}
          </Link>
        </Group>
        <Group spacing={5}>{items}</Group>
        <UserProfile />
      </HeaderContent>
    </StyledHeader>
  );
}
