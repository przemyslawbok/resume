/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from 'next/head';
import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { UserContext } from 'utils/contexts/UserContext';
import { useUserData } from 'utils/hooks/useUserData';

export default function App(props: AppProps) {
  const userData = useUserData();
  const { Component, pageProps } = props;

  return (
    <UserContext.Provider value={userData}>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
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
        }}
      >
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </UserContext.Provider>
  );
}
