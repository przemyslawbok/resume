import { Entity } from 'common/entity';

export interface Education extends Entity {
  description?: string;
  finishDate?: Date;
  place?: string;
  specialization?: string;
  startDate?: Date;
  title?: string;
}
