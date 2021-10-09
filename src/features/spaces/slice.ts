import { createSlice } from '@reduxjs/toolkit';
import { Space, SpacesListItem } from '@features/spaces/types';
import {
  getSpaceAction,
  getSpacesAction,
  refreshSpacesAction,
  setSpacesPagingAction,
  setSpacesSortAction,
  refreshSpaceAction,
} from '@features/spaces/actions';
import { logoutAction } from '@features/auth/actions';
import { Paging, Sort } from '@api/types';

interface State {
  isLoading: boolean;
  isRefreshing: boolean;
  spaces: SpacesListItem[];
  sort: Sort;
  paging: Paging;
  space: Space | null;
  count: number;
}

const initialState: State = {
  isLoading: false,
  isRefreshing: false,
  spaces: [],
  sort: { orderBy: 'created', sortDirection: 'desc' },
  paging: { limit: 20, offset: 0 },
  space: null,
  count: 0,
};

const spacesSlice = createSlice({
  name: 'spaces',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpacesAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSpaceAction.pending, (state) => {
      state.isLoading = true;
      state.space = null;
    });
    builder.addCase(refreshSpacesAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshSpaceAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshSpacesAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.spaces = action.payload.result;
      state.count = action.payload.count;
    });
    builder.addCase(refreshSpaceAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.space = action.payload.result;
    });
    builder.addCase(getSpacesAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.spaces = state.spaces.concat(action.payload.result);
      state.count = action.payload.count;
    });
    builder.addCase(getSpaceAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.space = action.payload.result;
    });
    builder.addCase(refreshSpacesAction.rejected, (state) => {
      state.isLoading = false;
      state.spaces = [];
      state.count = 0;
    });
    builder.addCase(refreshSpaceAction.rejected, (state) => {
      state.isLoading = false;
      state.space = null;
    });
    builder.addCase(getSpacesAction.rejected, (state) => {
      state.isLoading = false;
      state.spaces = [];
      state.count = 0;
    });
    builder.addCase(getSpaceAction.rejected, (state) => {
      state.isLoading = false;
      state.space = null;
    });
    builder.addCase(setSpacesSortAction, (state, action) => {
      state.sort = action.payload.sort;
    });
    builder.addCase(setSpacesPagingAction, (state, action) => {
      state.paging = action.payload.paging;
    });
    builder.addCase(logoutAction, () => initialState);
  },
});

export const { reducer } = spacesSlice;
