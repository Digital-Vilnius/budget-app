import { useAppDispatch, useAppSelector } from '@store';
import { useEffect } from 'react';
import {
  getSpaceUsersAction,
  refreshSpaceUsersAction,
  setSpaceUsersPagingAction,
} from '@features/spaceUsers/actions';

const useSpaceUsers = () => {
  const { isLoading, spaceUsers, isRefreshing, count, paging, sort } = useAppSelector(
    (state) => state.spaceUsers
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (paging.offset === 0) dispatch(refreshSpaceUsersAction({ paging, sort }));
    else dispatch(getSpaceUsersAction({ paging, sort }));
  }, [dispatch, paging, sort]);

  const refresh = () => {
    const newPaging = { ...paging, offset: 0 };
    dispatch(setSpaceUsersPagingAction({ paging: newPaging }));
  };

  const loadMore = () => {
    if (count <= spaceUsers.length) return;
    const newPaging = { ...paging, offset: paging.offset + paging.limit };
    dispatch(setSpaceUsersPagingAction({ paging: newPaging }));
  };

  return {
    isLoading,
    spaceUsers,
    isRefreshing,
    refresh,
    loadMore,
  };
};

export default useSpaceUsers;
