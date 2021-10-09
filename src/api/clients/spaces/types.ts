import { BaseModel } from '@api/types';
import { OperationsListItem } from '@api/clients/operations/types';

export interface AddSpaceRequest {
  title: string;
}

export interface EditSpaceRequest {
  title: string;
}

export interface Space extends BaseModel {
  title: string;
  recentOperations: OperationsListItem[];
}

export interface SpacesListItem extends BaseModel {
  title: string;
}
