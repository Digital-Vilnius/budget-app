import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SpaceUsersClient } from '@api/clients';
import { ListRequest, ListResponse, Paging, ResultResponse, Sort } from '@api/types';
import { mapSpaceUser, mapSpaceUsersListItem } from '@features/spaceUsers/map';
import { SpaceUsersListItem, SpaceUser } from '@features/spaceUsers/types';

export const getSpaceUsersAction = createAsyncThunk<ListResponse<SpaceUsersListItem>, ListRequest>(
  'getSpaceUsers',
  async (request: ListRequest) => {
    const response = await SpaceUsersClient.getSpaceUsers(request);
    return { count: response.count, result: response.result.map(mapSpaceUsersListItem) };
  }
);

export const refreshSpaceUsersAction = createAsyncThunk<
  ListResponse<SpaceUsersListItem>,
  ListRequest
>('refreshSpaceUsers', async (request: ListRequest) => {
  const response = await SpaceUsersClient.getSpaceUsers(request);
  return { count: response.count, result: response.result.map(mapSpaceUsersListItem) };
});

export const getSpaceUserAction = createAsyncThunk<ResultResponse<SpaceUser>, string>(
  'getSpaceUser',
  async (id: string) => {
    const response = await SpaceUsersClient.getSpaceUser(id);
    return { result: mapSpaceUser(response.result) };
  }
);

export const refreshSpaceUserAction = createAsyncThunk<ResultResponse<SpaceUser>, string>(
  'refreshSpaceUser',
  async (id: string) => {
    const response = await SpaceUsersClient.getSpaceUser(id);
    return { result: mapSpaceUser(response.result) };
  }
);

export const setSpaceUsersPagingAction = createAction<{ paging: Paging }>('setSpaceUsersPaging');
export const setSpaceUsersSortAction = createAction<{ sort: Sort }>('setSpaceUsersSort');
