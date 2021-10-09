import { useAppDispatch, useAppSelector } from '@store';
import { useEffect } from 'react';
import { getSpaceUserAction, refreshSpaceUserAction } from '@features/spaceUsers/actions';

const useSpaceUser = (id: string) => {
  const { isLoading, spaceUser, isRefreshing } = useAppSelector((state) => state.spaceUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSpaceUserAction(id));
  }, [dispatch, id]);

  const refresh = () => {
    dispatch(refreshSpaceUserAction(id));
  };

  return { isLoading, spaceUser, refresh, isRefreshing };
};

export default useSpaceUser;
