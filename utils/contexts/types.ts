import { SocialLink, User } from 'db/model';

export type UserData = {
  user: { uid?: string };
  userProfile?: User;
  socialLinks?: SocialLink[];
};
