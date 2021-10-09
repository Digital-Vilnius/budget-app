import { createSlice } from '@reduxjs/toolkit';
import { SpaceUser, SpaceUsersListItem } from '@features/spaceUsers/types';
import {
  getSpaceUserAction,
  getSpaceUsersAction,
  refreshSpaceUsersAction,
  refreshSpaceUserAction,
  setSpaceUsersPagingAction,
  setSpaceUsersSortAction,
} from '@features/spaceUsers/actions';
import { logoutAction } from '@features/auth/actions';
import { Paging, Sort } from '@api/types';

interface State {
  isLoading: boolean;
  isRefreshing: boolean;
  spaceUsers: SpaceUsersListItem[];
  sort: Sort;
  paging: Paging;
  spaceUser: SpaceUser | null;
  count: number;
}

const initialState: State = {
  isLoading: false,
  isRefreshing: false,
  spaceUsers: [],
  sort: { orderBy: 'created', sortDirection: 'desc' },
  paging: { limit: 20, offset: 0 },
  spaceUser: null,
  count: 0,
};

const spaceUsersSlice = createSlice({
  name: 'spaceUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpaceUserAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSpaceUsersAction.pending, (state) => {
      state.isLoading = true;
      state.spaceUser = null;
    });
    builder.addCase(refreshSpaceUsersAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshSpaceUserAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshSpaceUsersAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.spaceUsers = action.payload.result;
      state.count = action.payload.count;
    });
    builder.addCase(refreshSpaceUserAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.spaceUser = action.payload.result;
    });
    builder.addCase(getSpaceUsersAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.spaceUsers = state.spaceUsers.concat(action.payload.result);
      state.count = action.payload.count;
    });
    builder.addCase(getSpaceUserAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.spaceUser = action.payload.result;
    });
    builder.addCase(refreshSpaceUsersAction.rejected, (state) => {
      state.isLoading = false;
      state.spaceUsers = [];
      state.count = 0;
    });
    builder.addCase(refreshSpaceUserAction.rejected, (state) => {
      state.isLoading = false;
      state.spaceUser = null;
    });
    builder.addCase(getSpaceUsersAction.rejected, (state) => {
      state.isLoading = false;
      state.spaceUsers = [];
      state.count = 0;
    });
    builder.addCase(getSpaceUserAction.rejected, (state) => {
      state.isLoading = false;
      state.spaceUser = null;
    });
    builder.addCase(setSpaceUsersSortAction, (state, action) => {
      state.sort = action.payload.sort;
    });
    builder.addCase(setSpaceUsersPagingAction, (state, action) => {
      state.paging = action.payload.paging;
    });
    builder.addCase(logoutAction, () => initialState);
  },
});

export const { reducer } = spaceUsersSlice;
