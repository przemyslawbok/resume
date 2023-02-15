import firebase from 'firebase/app';
import 'firebase/firestore';

export function createConverter<
  T
>(): firebase.firestore.FirestoreDataConverter<T> {
  return {
    toFirestore(data: T): firebase.firestore.DocumentData {
      return data as unknown as firebase.firestore.DocumentData;
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>,
      options: firebase.firestore.SnapshotOptions
    ): T {
      const data = snapshot.data(options);
      return { ...(data as T), id: snapshot.id };
    },
  };
}
