import { BaseModel } from '../../types';

export interface AddCategoryRequest {
  name: string;
  parentId?: string;
  spaceId: string;
}

export interface EditCategoryRequest {
  name: string;
  parentId?: string;
}

export interface Category extends BaseModel {
  name: string;
  parent?: CategoriesListItem;
}

export interface CategoriesListItem extends BaseModel {
  name: string;
  parent?: CategoriesListItem;
}
