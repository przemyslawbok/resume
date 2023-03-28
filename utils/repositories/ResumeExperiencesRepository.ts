import { Experience } from 'db/model';
import { FirestoreSubCollectionRepository } from './base';
import { db } from 'db';

export class ResumeExperiencesRepository extends FirestoreSubCollectionRepository<Experience> {
  protected readonly collection = db.resumeExperiences;
}
