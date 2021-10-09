import {
  CategoriesListItem as ApiCategoriesListItem,
  Category as ApiCategory,
} from '@api/clients/categories/types';
import { Category, CategoriesListItem } from '@features/categories/types';

export const mapCategoriesListItem = (item: ApiCategoriesListItem): CategoriesListItem => item;

export const mapCategory = (item: ApiCategory): Category => item;
