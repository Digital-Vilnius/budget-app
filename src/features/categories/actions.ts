import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CategoriesClient } from '@api/clients';
import { ListRequest, ListResponse, Paging, ResultResponse, Sort } from '@api/types';
import { mapCategoriesListItem, mapCategory } from '@features/categories/map';
import { CategoriesListItem, Category } from '@features/categories/types';

export const getCategoriesAction = createAsyncThunk<ListResponse<CategoriesListItem>, ListRequest>(
  'getCategories',
  async (request: ListRequest) => {
    const response = await CategoriesClient.getCategories(request);
    return { count: response.count, result: response.result.map(mapCategoriesListItem) };
  }
);

export const refreshCategoriesAction = createAsyncThunk<
  ListResponse<CategoriesListItem>,
  ListRequest
>('refreshCategories', async (request: ListRequest) => {
  const response = await CategoriesClient.getCategories(request);
  return { count: response.count, result: response.result.map(mapCategoriesListItem) };
});

export const getCategoryAction = createAsyncThunk<ResultResponse<Category>, string>(
  'getCategory',
  async (id: string) => {
    const response = await CategoriesClient.getCategory(id);
    return { result: mapCategory(response.result) };
  }
);

export const refreshCategoryAction = createAsyncThunk<ResultResponse<Category>, string>(
  'refreshCategory',
  async (id: string) => {
    const response = await CategoriesClient.getCategory(id);
    return { result: mapCategory(response.result) };
  }
);

export const setCategoriesPagingAction = createAction<{ paging: Paging }>('setCategoriesPaging');
export const setCategoriesSortAction = createAction<{ sort: Sort }>('setCategoriesSort');
