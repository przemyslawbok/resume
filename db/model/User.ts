import { Entity } from 'common/entity';

export interface User extends Entity {
  avatar?: string;
  birthday?: Date | null;
  email?: string;
  firstName?: string;
  language?: string;
  lastName?: string;
  nickname?: string;
  phone?: string;
  photoUrl?: string;
  regDate?: Date;
  theme?: string;
}
