import { UserContext } from 'utils/contexts/UserContext';
import { UserProfile } from 'components';
import { useContext } from 'react';

const AdminPage = () => {
  const { user, userProfile } = useContext(UserContext);

  return (
    <main>
      {userProfile && <h3>{userProfile.firstName}</h3>}
      <UserProfile />
    </main>
  );
};

export default AdminPage;
