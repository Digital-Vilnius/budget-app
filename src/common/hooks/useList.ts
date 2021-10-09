import { ListRequest, Paging, Sort } from '@api/types';
import { useAppDispatch } from '@store';
import { useEffect } from 'react';

interface Props<T> {
  paging: Paging;
  sort: Sort;
  count: number;
  data: T[];
  setPagingAction: (paging: Paging) => void;
  refreshDataAction: (request: ListRequest) => void;
  getDataAction: (request: ListRequest) => void;
}

const useList = <T>(props: Props<T>) => {
  const { paging, setPagingAction, data, count, sort, refreshDataAction, getDataAction } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (paging.offset === 0) refreshDataAction({ paging, sort });
    else getDataAction({ paging, sort });
  }, [refreshDataAction, getDataAction, dispatch, paging, sort]);

  const refresh = () => {
    setPagingAction({ ...paging, offset: 0 });
  };

  const loadMore = () => {
    if (count <= data.length) return;
    setPagingAction({ ...paging, offset: paging.offset + paging.limit });
  };

  return { loadMore, refresh };
};

export default useList;
