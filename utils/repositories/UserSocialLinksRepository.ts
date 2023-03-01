import { FirestoreSubCollectionRepository } from './FirestoreSubCollectionRepository';
import { SocialLink } from 'db/model';
import { db } from 'db';

export class UserSocialLinkRepository extends FirestoreSubCollectionRepository<SocialLink> {
  protected readonly collection = db.userSocialLinks;
}
