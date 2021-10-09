import { BaseModel } from '@api/types';
import { CategoriesListItem } from '../categories/types';

export interface AddOperationRequest {
  description: string;
  categoryId: number;
  amount: number;
  date: string;
  spentById?: number;
}

export interface EditOperationRequest {
  description: string;
  categoryId: number;
  amount: number;
  date: string;
  spentById?: number;
}

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
