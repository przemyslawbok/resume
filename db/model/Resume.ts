import { Entity } from 'common/entity';

export interface Resume extends Entity {
  about?: string;
  address?: string;
  contactEmail?: string;
  contactPhone?: string;
  firstName?: string;
  lastName?: string;
  linkId?: string;
  localization?: string;
  profession?: string;
  validDate?: Date;
}
