import { BaseModel } from '@api/types';
import { OperationsListItem } from '@api/clients/operations/types';

export interface SpacesListItem extends BaseModel {
  title: string;
}

export interface Space extends BaseModel {
  title: string;
  recentOperations: OperationsListItem[];
}
