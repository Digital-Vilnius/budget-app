import httpClient from '../../httpClient';
import {
  AddCategoryRequest,
  EditCategoryRequest,
  CategoriesListItem,
  Category,
} from './types';
import { ListRequest, ListResponse, ResultResponse } from '@api/types';

const baseUrl = '/categories';

export const addCategory = async (request: AddCategoryRequest) => {
  return httpClient.post<AddCategoryRequest, ResultResponse<Category>>(baseUrl, request);
};

export const getCategories = async (request: ListRequest) => {
  const params = { ...request.paging, ...request.sort };
  return httpClient.get<ListRequest, ListResponse<CategoriesListItem>>(baseUrl, {
    params,
  });
};

export const getCategory = async (id: string) => {
  return httpClient.get<void, ResultResponse<Category>>(`${baseUrl}/${id}`);
};

export const editCategory = async (id: string, request: EditCategoryRequest) => {
  return httpClient.put<EditCategoryRequest, ResultResponse<Category>>(
    `${baseUrl}/${id}`,
    request
  );
};

export const deleteCategory = async (id: string) => {
  return httpClient.delete<string, void>(`${baseUrl}/${id}`);
};
