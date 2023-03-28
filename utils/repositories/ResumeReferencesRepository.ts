import { FirestoreSubCollectionRepository } from './base';
import { Reference } from 'db/model';
import { db } from 'db';

export class ResumeReferencesRepository extends FirestoreSubCollectionRepository<Reference> {
  protected readonly collection = db.resumeReferences;
}
