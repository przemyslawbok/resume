import Link from 'next/link';
import { Routes } from 'common/routes';
import { UserContext } from 'utils/contexts';
import { useContext } from 'react';

const UserProfilePage = () => {
  const { user, email } = useContext(UserContext);

  return (
    <main>
      <h1>{email}</h1>
      <Link href={Routes.Admin}>{email}</Link>
    </main>
  );
};
export default UserProfilePage;
