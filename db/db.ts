import firebase from 'firebase/app';
import {
  Education,
  Experience,
  Language,
  Reference,
  Resume,
  Skill,
  SocialLink,
  User,
} from './model';
import { firestore } from 'utils/firebase';
import 'firebase/firestore';

const converter = <T>(): firebase.firestore.FirestoreDataConverter<T> => ({
  toFirestore: (data: T): firebase.firestore.DocumentData =>
    data as firebase.firestore.DocumentData,
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
  ): T => snapshot.data() as T,
});

const dataPoint = <T>(collectionPath: string) =>
  firestore.collection(collectionPath).withConverter(converter<T>());

export const db = {
  users: dataPoint<User>('users'),
  userResumes: (userId: string) => dataPoint<Resume>(`users/${userId}/resumes`),
  userSocialLinks: (userId: string) =>
    dataPoint<SocialLink>(`users/${userId}/socialLinks`),
  resumeEducations: (resumeId: string) =>
    dataPoint<Education>(`resumes/${resumeId}/educations`),
  resumeExperiences: (resumeId: string) =>
    dataPoint<Experience>(`resumes/${resumeId}/experiences`),
  resumeSkills: (resumeId: string) =>
    dataPoint<Skill>(`resumes/${resumeId}/skills`),
  resumeLanguages: (resumeId: string) =>
    dataPoint<Language>(`resumes/${resumeId}/languages`),
  resumeReferences: (resumeId: string) =>
    dataPoint<Reference>(`resumes/${resumeId}/references`),
  resumeSocialLinks: (resumeId: string) =>
    dataPoint<SocialLink>(`resumes/${resumeId}/socialLinks`),
};
