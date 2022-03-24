import { plural } from 'pluralize';
import { getMetadataStorage } from '../MetadataUtils';
import type { IEntityConstructor } from '../types';

export function Collection(entityName?: string) {
  return function (entityConstructor: IEntityConstructor) {
    const name = entityName || plural(entityConstructor.name);
    getMetadataStorage().setCollection({
      name,
      entityConstructor,
    });
  };
}
