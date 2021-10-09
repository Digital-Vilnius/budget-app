import { useAppDispatch, useAppSelector } from '@store';
import { useEffect } from 'react';
import {
  getCategoriesAction,
  refreshCategoriesAction,
  setCategoriesPagingAction,
} from '@features/categories/actions';

const useCategories = () => {
  const { isLoading, categories, isRefreshing, count, paging, sort } = useAppSelector(
    (state) => state.categories
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (paging.offset === 0) dispatch(refreshCategoriesAction({ paging, sort }));
    else dispatch(getCategoriesAction({ paging, sort }));
  }, [dispatch, paging, sort]);

  const refresh = () => {
    const newPaging = { ...paging, offset: 0 };
    dispatch(setCategoriesPagingAction({ paging: newPaging }));
  };

  const loadMore = () => {
    if (count <= categories.length) return;
    const newPaging = { ...paging, offset: paging.offset + paging.limit };
    dispatch(setCategoriesPagingAction({ paging: newPaging }));
  };

  return {
    isLoading,
    categories,
    isRefreshing,
    refresh,
    loadMore,
  };
};

export default useCategories;
