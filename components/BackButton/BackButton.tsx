import { BackButtonProps } from './BackButton.data';
import { Button } from '@mantine/core';
import { FC } from 'react';
import { useRouter } from 'next/router';

const BackButton: FC<BackButtonProps> = ({ text = 'Back' }) => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  return <Button onClick={handleBackButtonClick}>{text}</Button>;
};
export default BackButton;
