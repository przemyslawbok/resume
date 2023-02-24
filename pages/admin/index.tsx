import { UserContext } from 'utils/contexts/UserContext';
import { UserProfile } from 'components';
import { useContext } from 'react';

const AdminPage = () => {
  const { user, email } = useContext(UserContext);

  return (
    <main>
      <h1>{email}</h1>
      <UserProfile />
    </main>
  );
};

export default AdminPage;
