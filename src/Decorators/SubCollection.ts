import { plural } from 'pluralize';
import { getMetadataStorage } from '../MetadataUtils';
import { IEntity, IEntityConstructor } from '../types';

export function SubCollection(entityConstructor: IEntityConstructor, entityName?: string) {
  return function (parentEntity: IEntity, propertyKey: string) {
    getMetadataStorage().setCollection({
      entityConstructor,
      name: entityName || plural(entityConstructor.name),
      parentEntityConstructor: parentEntity.constructor as IEntityConstructor,
      propertyKey,
    });
  };
}
