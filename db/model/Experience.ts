import { Entity } from 'common/entity';

export interface Experience extends Entity {
  company?: string;
  description: string;
  finishDate?: Date;
  position?: string;
  startDate?: Date;
}
