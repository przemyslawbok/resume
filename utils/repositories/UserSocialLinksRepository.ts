import { FirestoreSubCollectionRepository } from './base';
import { SocialLink } from 'db/model';
import { db } from 'db';

export class UserSocialLinksRepository extends FirestoreSubCollectionRepository<SocialLink> {
  protected readonly collection = db.userSocialLinks;
}
