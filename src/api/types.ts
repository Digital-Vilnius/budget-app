export interface BaseModel {
  id: string;
  updated: string | null;
  created: string;
}

export interface ResultResponse<T> {
  result: T;
}

export interface ListResponse<T> extends ResultResponse<T[]> {
  count: number;
}

export interface ListRequest<T = undefined> {
  sort?: Sort;
  paging?: Paging;
  filter?: T;
}

export interface Paging {
  limit: number;
  offset: number;
}

export interface Sort {
  orderBy: string;
  sortDirection: 'asc' | 'desc';
}
