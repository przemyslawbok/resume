import { UserData } from './types';
import { createContext } from 'react';

export const UserContext = createContext<UserData>({ user: {}, email: '' });
