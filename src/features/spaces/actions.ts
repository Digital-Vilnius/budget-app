import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SpacesClient } from '@api/clients';
import { ListRequest, ListResponse, Paging, ResultResponse, Sort } from '@api/types';
import { Space, SpacesListItem } from '@api/clients/spaces/types';
import { mapSpace, mapSpacesListItem } from '@features/spaces/map';

export const getSpacesAction = createAsyncThunk<ListResponse<SpacesListItem>, ListRequest>(
  'getSpaces',
  async (request: ListRequest) => {
    return await SpacesClient.getSpaces(request);
  }
);

export const refreshSpacesAction = createAsyncThunk<ListResponse<SpacesListItem>, ListRequest>(
  'refreshSpaces',
  async (request: ListRequest) => {
    const response = await SpacesClient.getSpaces(request);
    return { count: response.count, result: response.result.map(mapSpacesListItem) };
  }
);

export const getSpaceAction = createAsyncThunk<ResultResponse<Space>, string>(
  'getSpace',
  async (id: string) => {
    const response = await SpacesClient.getSpace(id);
    return { result: mapSpace(response.result) };
  }
);

export const refreshSpaceAction = createAsyncThunk<ResultResponse<Space>, string>(
  'refreshSpace',
  async (id: string) => {
    const response = await SpacesClient.getSpace(id);
    return { result: mapSpace(response.result) };
  }
);

export const setSpacesPagingAction = createAction<{ paging: Paging }>('setSpacesPaging');
export const setSpacesSortAction = createAction<{ sort: Sort }>('setSpacesSort');
