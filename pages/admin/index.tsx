import { Routes } from 'common/routes';
import { User } from 'db/model';
import { UserContext } from 'utils/contexts/UserContext';
import { UserProfile } from 'components';
import { db } from 'db';
import { useContext, useEffect } from 'react';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { useRouter } from 'next/dist/client/router';

const AdminPage = () => {
  const { user, email } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user.uid) router.replace(Routes.Home);
  });

  // const [value, loading, error] = useDocumentDataOnce<User>(db.user(user.uid));

  return (
    <main>
      <h1>{email}</h1>
      <UserProfile />
    </main>
  );
};

export default AdminPage;
