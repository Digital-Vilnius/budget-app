import {
  OperationsListItem as ApiOperationsListItem,
  Operation as ApiOperation,
} from '@api/clients/operations/types';
import { Operation, OperationsListItem } from '@features/operations/types';

export const mapOperationsListItem = (item: ApiOperationsListItem): OperationsListItem => item;

export const mapOperation = (item: ApiOperation): Operation => item;
