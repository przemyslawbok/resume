import { NavBar } from 'components';
import { UserContext } from 'utils/contexts/UserContext';
import { useContext } from 'react';

const AdminPage = () => {
  const { email } = useContext(UserContext);

  return (
    <main>
      <NavBar />
    </main>
  );
};

export default AdminPage;
