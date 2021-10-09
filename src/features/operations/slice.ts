import { createSlice } from '@reduxjs/toolkit';
import { Operation, OperationsListItem } from '@features/operations/types';
import {
  getOperationsAction,
  getOperationAction,
  refreshOperationAction,
  refreshOperationsAction,
  setOperationsPagingAction,
  setOperationsSortAction,
} from '@features/operations/actions';
import { logoutAction } from '@features/auth/actions';
import { Paging, Sort } from '@api/types';

interface State {
  isLoading: boolean;
  isRefreshing: boolean;
  operations: OperationsListItem[];
  sort: Sort;
  paging: Paging;
  operation: Operation | null;
  count: number;
}

const initialState: State = {
  isLoading: false,
  isRefreshing: false,
  operations: [],
  sort: { orderBy: 'created', sortDirection: 'desc' },
  paging: { limit: 20, offset: 0 },
  operation: null,
  count: 0,
};

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOperationsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOperationAction.pending, (state) => {
      state.isLoading = true;
      state.operation = null;
    });
    builder.addCase(refreshOperationsAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshOperationAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshOperationsAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.operations = action.payload.result;
      state.count = action.payload.count;
    });
    builder.addCase(refreshOperationAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.operation = action.payload.result;
    });
    builder.addCase(getOperationsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.operations = state.operations.concat(action.payload.result);
      state.count = action.payload.count;
    });
    builder.addCase(getOperationAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.operation = action.payload.result;
    });
    builder.addCase(refreshOperationsAction.rejected, (state) => {
      state.isLoading = false;
      state.operations = [];
      state.count = 0;
    });
    builder.addCase(refreshOperationAction.rejected, (state) => {
      state.isLoading = false;
      state.operation = null;
    });
    builder.addCase(getOperationsAction.rejected, (state) => {
      state.isLoading = false;
      state.operations = [];
      state.count = 0;
    });
    builder.addCase(getOperationAction.rejected, (state) => {
      state.isLoading = false;
      state.operation = null;
    });
    builder.addCase(setOperationsSortAction, (state, action) => {
      state.sort = action.payload.sort;
    });
    builder.addCase(setOperationsPagingAction, (state, action) => {
      state.paging = action.payload.paging;
    });
    builder.addCase(logoutAction, () => initialState);
  },
});

export const { reducer } = operationsSlice;
