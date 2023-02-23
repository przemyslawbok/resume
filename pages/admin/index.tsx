import { User } from 'db/model';
import { UserContext } from 'utils/contexts/UserContext';
import { UserProfile } from 'components';
import { db } from 'db';
import { useContext } from 'react';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';

const AdminPage = () => {
  const { user, email } = useContext(UserContext);

  const [value, loading, error] = useDocumentDataOnce<User>(db.user(user.uid!));

  return (
    <main>
      <h1>{email}</h1>
      <UserProfile />
    </main>
  );
};

export default AdminPage;
