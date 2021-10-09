import { useAppDispatch, useAppSelector } from '@store';
import { useEffect } from 'react';
import { getOperationAction, refreshOperationAction } from '@features/operations/actions';

const useOperation = (id: string) => {
  const { isLoading, operation, isRefreshing } = useAppSelector((state) => state.operations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOperationAction(id));
  }, [dispatch, id]);

  const refresh = () => {
    dispatch(refreshOperationAction(id));
  };

  return { isLoading, operation, refresh, isRefreshing };
};

export default useOperation;
