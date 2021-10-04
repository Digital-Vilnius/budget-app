import { useAppDispatch, useAppSelector } from '@store';
import { useEffect } from 'react';
import {
  getSpacesAction,
  refreshSpacesAction,
  setSpacesPagingAction,
} from '@features/spaces/actions';

const useSpaces = () => {
  const { isLoading, spaces, isRefreshing, count, paging, sort } = useAppSelector(
    (state) => state.spaces
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (paging.offset === 0) dispatch(refreshSpacesAction({ paging, sort }));
    else dispatch(getSpacesAction({ paging, sort }));
  }, [dispatch, paging, sort]);

  const refresh = () => {
    const newPaging = { ...paging, offset: 0 };
    dispatch(setSpacesPagingAction({ paging: newPaging }));
  };

  const loadMore = () => {
    if (count <= spaces.length) return;
    const newPaging = { ...paging, offset: paging.offset + paging.limit };
    dispatch(setSpacesPagingAction({ paging: newPaging }));
  };

  return {
    isLoading,
    spaces,
    isRefreshing,
    refresh,
    loadMore,
  };
};

export default useSpaces;
