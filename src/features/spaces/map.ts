import { SpacesListItem as ApiSpacesListItem, Space as ApiSpace } from '@api/clients/spaces/types';
import { SpacesListItem, Space } from '@features/spaces/types';

export const mapSpacesListItem = (item: ApiSpacesListItem): SpacesListItem => item;

export const mapSpace = (item: ApiSpace): Space => item;
