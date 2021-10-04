import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SpacesClient } from '@api/clients';
import { ListRequest, ListResponse, Paging, ResultResponse, Sort } from '@api/types';
import { Space, SpacesListItem } from '@api/clients/spaces/types';

export const getSpacesAction = createAsyncThunk<
  ListResponse<SpacesListItem>,
  ListRequest
>('getSpaces', async (request: ListRequest) => {
  return await SpacesClient.getSpaces(request);
});

export const refreshSpacesAction = createAsyncThunk<
  ListResponse<SpacesListItem>,
  ListRequest
>('refreshSpaces', async (request: ListRequest) => {
  return await SpacesClient.getSpaces(request);
});

export const getSpaceAction = createAsyncThunk<ResultResponse<Space>, string>(
  'getSpace',
  async (id: string) => {
    return await SpacesClient.getSpace(id);
  }
);

export const setSpacesPagingAction = createAction<{ paging: Paging }>('setSpacesPaging');
export const setSpacesSortAction = createAction<{ sort: Sort }>('setSpacesSort');
