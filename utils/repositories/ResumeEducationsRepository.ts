import { Education } from 'db/model';
import { FirestoreSubCollectionRepository } from './base';
import { db } from 'db';

export class ResumeEducationsRepository extends FirestoreSubCollectionRepository<Education> {
  protected readonly collection = db.resumeEducations;
}
