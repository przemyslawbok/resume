import { Button } from '@mantine/core';
import { FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'utils/hooks';

const BackButton: FC = () => {
  const router = useRouter();
  const [t] = useTranslation();

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <Button onClick={handleBackButtonClick}>{t('buttonLabel.back')}</Button>
  );
};
export default BackButton;
