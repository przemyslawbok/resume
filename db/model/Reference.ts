import { Entity } from 'common/entity';

export interface Reference extends Entity {
  company?: string;
  email?: string;
  firstName?: string;
  phone?: string;
  position?: string;
  lastName?: string;
}
