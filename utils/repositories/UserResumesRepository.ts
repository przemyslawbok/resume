import { FirestoreSubCollectionRepository } from './base';
import { Resume } from 'db/model';
import { db } from 'db';

export class UserResumesRepository extends FirestoreSubCollectionRepository<Resume> {
  protected readonly collection = db.userResumes;
}
