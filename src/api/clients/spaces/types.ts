import { BaseModel } from '../../types';

export interface AddSpaceRequest {
  title: string;
}

export interface EditSpaceRequest {
  title: string;
}

export interface Space extends BaseModel {
  title: string;
}

export interface SpacesListItem extends BaseModel {
  title: string;
}
