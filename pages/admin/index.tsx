import { UserContext } from 'utils/contexts/UserContext';
import { useContext } from 'react';

const AdminPage = () => {
  const { email } = useContext(UserContext);

  return (
    <main>
      <h1>{email}</h1>
    </main>
  );
};

export default AdminPage;
