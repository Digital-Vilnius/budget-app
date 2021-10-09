import httpClient from '../../httpClient';
import { AddSpaceUserRequest, EditSpaceUserRequest, SpaceUser, SpaceUsersListItem } from './types';
import { ListRequest, ListResponse, ResultResponse } from '@api/types';

const baseUrl = '/spaceUsers';

export const addSpaceUser = async (request: AddSpaceUserRequest) => {
  return httpClient.post<AddSpaceUserRequest, ResultResponse<SpaceUser>>(baseUrl, request);
};

export const getSpaceUsers = async (request: ListRequest) => {
  const params = { ...request.paging, ...request.sort };
  return httpClient.get<ListRequest, ListResponse<SpaceUsersListItem>>(baseUrl, {
    params,
  });
};

export const getSpaceUser = async (id: string) => {
  return httpClient.get<void, ResultResponse<SpaceUser>>(`${baseUrl}/${id}`);
};

export const editSpaceUser = async (id: string, request: EditSpaceUserRequest) => {
  return httpClient.put<EditSpaceUserRequest, ResultResponse<SpaceUser>>(
    `${baseUrl}/${id}`,
    request
  );
};

export const deleteSpaceUser = async (id: string) => {
  return httpClient.delete<string, void>(`${baseUrl}/${id}`);
};
