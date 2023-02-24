import firebase from 'firebase/app';
import { User, UserResume } from './model';
import { firestore } from 'utils/firebase';
import 'firebase/firestore';

export const converter = <
  T
>(): firebase.firestore.FirestoreDataConverter<T> => ({
  toFirestore: (data: T): firebase.firestore.DocumentData =>
    data as firebase.firestore.DocumentData,
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
  ): T => snapshot.data() as T,
});

export const dataPoint = <T>(collectionPath: string) =>
  firestore.collection(collectionPath).withConverter(converter<T>());

export const db = {
  users: dataPoint<User>('users'),
  user: (userId: string) => dataPoint<User>('users').doc(userId),
  userResumes: (userId: string) =>
    dataPoint<UserResume>(`users/${userId}/resumes`),
};
