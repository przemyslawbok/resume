import Link from 'next/link';
import styled from 'styled-components';
import { Container, Header, Text } from '@mantine/core';
import { HEADER_HEIGHT, HighlightedProps } from './PageHeader.data';

export const StyledHeader = styled(Header)`
  position: relative;
  z-index: 1;
`;

export const HeaderContent = styled(Container)`
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled(Text)<HighlightedProps>`
  border-radius: 5px;
  ${(props) => (props.$highlighted ? 'background-color: #e2f0ff' : '')};
`;

export const HeaderLink = styled(Link)`
  display: block;
  line-height: 1;
  padding: 8px 12px;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  min-width: 75px;
  text-align: center;
  color: #495057;

  &:hover {
    background-color: #f5f5f5;
    color: #212529;
  }
`;
