import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { PublicRoutes } from 'common/publicRoutes';
import { Routes } from 'common/routes';
import { UserContext } from 'utils/contexts';
import { useRouter } from 'next/router';

interface RouteGuardProps {
  children?: ReactNode;
}

const RouteGuard: FC<RouteGuardProps> = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const authCheck = (url: string): void => {
      const path = url.split('/')[1];
      const pathWithSlash = `/${path}`;

      if ((user && user.uid) || PublicRoutes.includes(pathWithSlash)) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
        router.push(Routes.Home);
      }
    };

    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = (): void => setAuthorized(false);

    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, [router, user]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{authorized && children}</>;
};

export default RouteGuard;
