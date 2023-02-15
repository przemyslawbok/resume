import {
  CollectionQuery,
  CollectionRef,
  DbError,
  DocumentRef,
  FirestoreError,
} from './types';
import { createConverter } from './converter';
import { db } from 'utils/firebase';
import { useState } from 'react';

export function useDb<T>(collectionName: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<DbError | null>(null);

  const converter = createConverter<T>();

  function getCollectionRef(): CollectionRef<T> {
    return db.collection(collectionName).withConverter(converter);
  }

  function getDocumentRef(id: string): DocumentRef<T> {
    return getCollectionRef().doc(id);
  }

  function queryCollection(query?: CollectionQuery): CollectionRef<T> {
    let collection = getCollectionRef();
    if (query) {
      collection = collection.where(
        query.field,
        query.operator,
        query.value
      ) as CollectionRef<T>;
    }
    return collection;
  }

  function handleDbError(err: FirestoreError) {
    const { code } = err;
    const { message } = err;
    setError({ code, message });
  }

  function clearError() {
    setError(null);
  }

  function fetchCollection(query?: CollectionQuery) {
    clearError();
    queryCollection(query)
      .get()
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setData(docs);
      })
      .catch((err: FirestoreError) => {
        handleDbError(err);
      });
  }

  function fetchDocument(id: string) {
    clearError();
    getDocumentRef(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const result = doc.data() as T;
          setData([result]);
        } else {
          setData([]);
        }
      })
      .catch((err: FirestoreError) => {
        handleDbError(err);
      });
  }

  function createDocument(document: T, parentId?: string) {
    clearError();
    let ref = getCollectionRef();
    if (parentId) {
      ref = getDocumentRef(parentId)
        .collection(collectionName)
        .withConverter(converter) as CollectionRef<T>;
    }
    ref.add(document).catch((err: FirestoreError) => {
      handleDbError(err);
    });
  }

  function updateDocument(id: string, document: T) {
    clearError();
    getDocumentRef(id)
      .set(document, { merge: true })
      .catch((err: FirestoreError) => {
        handleDbError(err);
      });
  }

  function deleteDocument(doc: string | DocumentRef<T>) {
    clearError();
    if (typeof doc === 'string') {
      getDocumentRef(doc)
        .delete()
        .catch((err: FirestoreError) => {
          handleDbError(err);
        });
    } else {
      doc.delete().catch((err: FirestoreError) => {
        handleDbError(err);
      });
    }
  }

  return {
    data,
    error,
    fetchCollection,
    fetchDocument,
    createDocument,
    updateDocument,
    deleteDocument,
  };
}
