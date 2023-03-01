import { UserContext } from 'utils/contexts';
import { useContext } from 'react';

const ResumePage = () => {
  const { user, userProfile } = useContext(UserContext);

  return <>Resume</>;
};

export default ResumePage;
