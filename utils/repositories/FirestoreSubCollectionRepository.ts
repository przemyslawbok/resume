import firebase from 'firebase/app';
import { Entity } from 'common/entity';
import 'firebase/firestore';

export abstract class FirestoreSubCollectionRepository<T extends Entity> {
  protected readonly collection: firebase.firestore.CollectionReference<T>;

  constructor(collection: firebase.firestore.CollectionReference<T>) {
    this.collection = collection;
  }

  async create(entity: T): Promise<string> {
    const ref = await this.collection.add(entity);
    return ref.id;
  }

  async update(entity: T): Promise<void> {
    const { id, ...data } = entity;
    await this.collection.doc(id).update(data);
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }

  async getById(id: string): Promise<T | undefined> {
    const snapshot = await this.collection.doc(id).get();
    return snapshot.exists
      ? ({ id: snapshot.id, ...snapshot.data() } as T)
      : undefined;
  }

  async getAll(): Promise<T[]> {
    const snapshot = await this.collection.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as T));
  }
}
