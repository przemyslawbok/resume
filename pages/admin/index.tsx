import { UserContext } from 'utils/contexts/UserContext';
import { UserProfile } from 'components/UserProfile';
import { useContext } from 'react';

const AdminPage = () => {
  const { email } = useContext(UserContext);

  return (
    <main>
      <h1>{email}</h1>
      <UserProfile />
    </main>
  );
};

export default AdminPage;
