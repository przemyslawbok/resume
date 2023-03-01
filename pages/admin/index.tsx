import { SocialLink } from 'db/model';
import { UserContext } from 'utils/contexts/UserContext';
import { UserProfile } from 'components';
import { useContext } from 'react';

const AdminPage = () => {
  const { user, userProfile, socialLinks } = useContext(UserContext);

  return (
    <main>
      {userProfile && <h3>{userProfile.firstName}</h3>}
      <UserProfile />
      {socialLinks && (
        <ul>
          {socialLinks.map((link: SocialLink) => (
            <li key={link.link}>{link.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default AdminPage;
