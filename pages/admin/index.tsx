import { UserContext } from 'utils/contexts/UserContext';
import { UserProfile } from 'components';
import { useContext } from 'react';

const AdminPage = () => {
  const { user, userProfile, email } = useContext(UserContext);

  return (
    <main>
      <h1>{email}</h1>
      {userProfile && <h3>{userProfile.firstName}</h3>}
      <UserProfile />
    </main>
  );
};

export default AdminPage;
