import { FirestoreSubCollectionRepository } from './base';
import { Skill } from 'db/model';
import { db } from 'db';

export class ResumeSkillsRepository extends FirestoreSubCollectionRepository<Skill> {
  protected readonly collection = db.resumeSkills;
}
