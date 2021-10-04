import httpClient from '../../httpClient';
import { AddSpaceRequest, EditSpaceRequest, Space, SpacesListItem } from './types';
import { ListRequest, ListResponse, ResultResponse } from '@api/types';

const baseUrl = '/spaces';

export const addSpace = async (request: AddSpaceRequest) => {
  return httpClient.post<AddSpaceRequest, ResultResponse<Space>>(baseUrl, request);
};

export const getSpaces = async (request: ListRequest) => {
  const params = { ...request.paging, ...request.sort };
  return httpClient.get<ListRequest, ListResponse<SpacesListItem>>(baseUrl, { params });
};

export const getSpace = async (id: string) => {
  return httpClient.get<void, ResultResponse<Space>>(`${baseUrl}/${id}`);
};

export const editSpace = async (id: string, request: EditSpaceRequest) => {
  return httpClient.put<EditSpaceRequest, ResultResponse<Space>>(
    `${baseUrl}/${id}`,
    request
  );
};

export const deleteSpace = async (id: string) => {
  return httpClient.delete<string, void>(`${baseUrl}/${id}`);
};
