import { UserContext } from 'utils/contexts';
import { useContext } from 'react';

const ResumeEditPage = () => {
  const { user, userProfile } = useContext(UserContext);

  return <>Resume Edit</>;
};

export default ResumeEditPage;
