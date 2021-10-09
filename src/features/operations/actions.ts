import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { OperationsClient } from '@api/clients';
import { ListRequest, ListResponse, Paging, ResultResponse, Sort } from '@api/types';
import { mapOperation, mapOperationsListItem } from '@features/operations/map';
import { OperationsListItem, Operation } from '@features/operations/types';

export const getOperationsAction = createAsyncThunk<ListResponse<OperationsListItem>, ListRequest>(
  'getOperations',
  async (request: ListRequest) => {
    const response = await OperationsClient.getOperations(request);
    return { count: response.count, result: response.result.map(mapOperationsListItem) };
  }
);

export const refreshOperationsAction = createAsyncThunk<
  ListResponse<OperationsListItem>,
  ListRequest
>('refreshOperations', async (request: ListRequest) => {
  const response = await OperationsClient.getOperations(request);
  return { count: response.count, result: response.result.map(mapOperationsListItem) };
});

export const getOperationAction = createAsyncThunk<ResultResponse<Operation>, string>(
  'getOperation',
  async (id: string) => {
    const response = await OperationsClient.getOperation(id);
    return { result: mapOperation(response.result) };
  }
);

export const refreshOperationAction = createAsyncThunk<ResultResponse<Operation>, string>(
  'refreshOperation',
  async (id: string) => {
    const response = await OperationsClient.getOperation(id);
    return { result: mapOperation(response.result) };
  }
);

export const setOperationsPagingAction = createAction<{ paging: Paging }>('setOperationsPaging');
export const setOperationsSortAction = createAction<{ sort: Sort }>('setOperationsSort');
