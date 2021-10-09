import { BaseModel } from '@api/types';

export interface SpaceUser extends BaseModel {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  roleId: string;
  roleName: string;
}

export interface SpaceUsersListItem extends BaseModel {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  roleId: string;
  roleName: string;
}
