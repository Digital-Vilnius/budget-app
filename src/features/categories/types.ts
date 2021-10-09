import { BaseModel } from '@api/types';

export interface CategoriesListItem extends BaseModel {
  name: string;
}

export interface Category extends BaseModel {
  name: string;
}
