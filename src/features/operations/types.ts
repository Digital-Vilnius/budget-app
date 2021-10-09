import { BaseModel } from '@api/types';
import { CategoriesListItem } from '@features/categories/types';

export interface Operation extends BaseModel {
  description: string;
  amount: number;
  date: string;
  category: CategoriesListItem;
}

export interface OperationsListItem extends BaseModel {
  description: string;
  amount: number;
  date: string;
  category: CategoriesListItem;
}
