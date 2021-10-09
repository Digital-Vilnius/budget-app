import {
  SpaceUsersListItem as ApiSpaceUsersListItem,
  SpaceUser as ApiSpaceUser,
} from '@api/clients/spaceUsers/types';
import { SpaceUser, SpaceUsersListItem } from '@features/spaceUsers/types';

export const mapSpaceUsersListItem = (item: ApiSpaceUsersListItem): SpaceUsersListItem => item;

export const mapSpaceUser = (item: ApiSpaceUser): SpaceUser => item;
