import { useAppDispatch, useAppSelector } from '@store';
import { useEffect } from 'react';
import { getSpaceAction, refreshSpaceAction } from '@features/spaces/actions';

const useSpace = (id: string) => {
  const { isLoading, space, isRefreshing } = useAppSelector((state) => state.spaces);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSpaceAction(id));
  }, [dispatch, id]);

  const refresh = () => {
    dispatch(refreshSpaceAction(id));
  };

  return { isLoading, space, refresh, isRefreshing };
};

export default useSpace;
