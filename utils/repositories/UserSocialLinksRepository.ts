import { FirestoreSubCollectionRepository } from './FirestoreSubCollectionRepository';
import { SocialLink } from 'db/model';

export class UserSocialLinkRepository extends FirestoreSubCollectionRepository<SocialLink> {}
