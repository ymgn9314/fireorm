import { Transaction } from '@google-cloud/firestore';
import { getMetadataStorage } from '../MetadataUtils';
import {
  EntityConstructorOrPath,
  IEntity,
  IFirestoreTransaction,
  ITransactionReferenceStorage,
} from '../types';
import { TransactionRepository } from './BaseFirestoreTransactionRepository';

const metadataStorage = getMetadataStorage();

export class FirestoreTransaction implements IFirestoreTransaction {
  constructor(
    private transaction: Transaction,
    private tranRefStorage: ITransactionReferenceStorage
  ) {}

  getRepository<T extends IEntity = IEntity>(entityOrConstructor: EntityConstructorOrPath<T>) {
    if (!metadataStorage.firestoreRef) {
      throw new Error('Firestore must be initialized first');
    }

    return new TransactionRepository<T>(entityOrConstructor, this.transaction, this.tranRefStorage);
  }
}
