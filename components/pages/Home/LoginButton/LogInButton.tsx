import { Button } from '@mantine/core';
import { FC } from 'react';
import { googleSignIn } from './LogInButton.logic';

export const LogInButton: FC = () => (
  <Button onClick={googleSignIn}>Log In</Button>
);
