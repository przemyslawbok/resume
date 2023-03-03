import { FirestoreRepository } from './FirestoreRepository';
import { User } from 'db/model';
import { db } from 'db';

export class UserRepository extends FirestoreRepository<User> {
  protected readonly collection = db.users;
}
