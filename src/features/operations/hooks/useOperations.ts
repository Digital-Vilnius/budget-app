import { useAppDispatch, useAppSelector } from '@store';
import { useEffect } from 'react';
import {
  getOperationsAction,
  refreshOperationsAction,
  setOperationsPagingAction,
} from '@features/operations/actions';

const useOperations = () => {
  const { isLoading, operations, isRefreshing, count, paging, sort } = useAppSelector(
    (state) => state.operations
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (paging.offset === 0) dispatch(refreshOperationsAction({ paging, sort }));
    else dispatch(getOperationsAction({ paging, sort }));
  }, [dispatch, paging, sort]);

  const refresh = () => {
    const newPaging = { ...paging, offset: 0 };
    dispatch(setOperationsPagingAction({ paging: newPaging }));
  };

  const loadMore = () => {
    if (count <= operations.length) return;
    const newPaging = { ...paging, offset: paging.offset + paging.limit };
    dispatch(setOperationsPagingAction({ paging: newPaging }));
  };

  return {
    isLoading,
    operations,
    isRefreshing,
    refresh,
    loadMore,
  };
};

export default useOperations;
