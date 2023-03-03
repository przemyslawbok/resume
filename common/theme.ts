import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: 'Open Sans, sans-serif',
  colorScheme: 'light',
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  components: {
    Button: {
      defaultProps: {
        color: 'dark',
        size: 'xl',
        radius: 'md',
        variants: {
          outline: {
            color: 'white',
          },
        },
      },
    },
  },
};
