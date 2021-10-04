import httpClient from '../../httpClient';
import {
  AddOperationRequest,
  EditOperationRequest,
  Operation,
  OperationsListItem,
} from './types';
import { ListRequest, ListResponse, ResultResponse } from '@api/types';

const baseUrl = '/operations';

export const addOperation = async (request: AddOperationRequest) => {
  return httpClient.post<AddOperationRequest, ResultResponse<Operation>>(
    baseUrl,
    request
  );
};

export const getOperations = async (request: ListRequest) => {
  const params = { ...request.paging, ...request.sort };
  return httpClient.get<ListRequest, ListResponse<OperationsListItem>>(baseUrl, {
    params,
  });
};

export const getOperation = async (id: string) => {
  return httpClient.get<void, ResultResponse<Operation>>(`${baseUrl}/${id}`);
};

export const editOperation = async (id: string, request: EditOperationRequest) => {
  return httpClient.put<EditOperationRequest, ResultResponse<Operation>>(
    `${baseUrl}/${id}`,
    request
  );
};

export const deleteOperation = async (id: string) => {
  return httpClient.delete<string, void>(`${baseUrl}/${id}`);
};
