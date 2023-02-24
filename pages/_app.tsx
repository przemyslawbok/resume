/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from 'next/head';
import RouteGuard from 'components/RouteGuard/RouteGuard';
import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { UserContext } from 'utils/contexts';
import { theme } from 'common/theme';
import { useUserData } from 'utils/hooks';

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

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <NotificationsProvider>
          <RouteGuard>
            <Component {...pageProps} />
          </RouteGuard>
        </NotificationsProvider>
      </MantineProvider>
    </UserContext.Provider>
  );
}
