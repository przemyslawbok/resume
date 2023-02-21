import { TextProps } from '@mantine/core';

export const HEADER_HEIGHT = 60;

export type LinkData = {
  link: string;
  label: string;
};

export type HighlightedProps = TextProps & {
  $highlighted?: boolean;
};
