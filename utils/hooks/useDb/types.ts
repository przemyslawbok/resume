import firebase from 'firebase/app';

export interface CollectionQuery {
  field: string;
  operator: firebase.firestore.WhereFilterOp;
  value: any;
}

export type CollectionRef<T> = firebase.firestore.CollectionReference<T>;

export type DocumentRef<T> = firebase.firestore.DocumentReference<T>;

export type FirestoreError = firebase.firestore.FirestoreError;

export interface DbError {
  code: string;
  message: string;
}
