import Link from 'next/link';
import styled from 'styled-components';
import { theme } from 'common/theme';

const StyledLink = styled(Link)`
  display: block;
  border-radius: ${theme.radius.sm};

  &:hover {
  }
`;

const StyledActiveLink = styled(Link)``;
