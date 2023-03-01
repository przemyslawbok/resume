import { UserContext } from 'utils/contexts';
import { useContext } from 'react';

const TestQueryPage = () => {
  const { user, userProfile } = useContext(UserContext);

  return <>Test Query</>;
};

export default TestQueryPage;
