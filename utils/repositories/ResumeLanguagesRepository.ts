import { FirestoreSubCollectionRepository } from './base';
import { Language } from 'db/model';
import { db } from 'db';

export class ResumeLanguagesRepository extends FirestoreSubCollectionRepository<Language> {
  protected readonly collection = db.resumeLanguages;
}
