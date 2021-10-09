import { useAppDispatch, useAppSelector } from '@store';
import { useEffect } from 'react';
import { getCategoryAction, refreshCategoryAction } from '@features/categories/actions';

const useCategory = (id: string) => {
  const { isLoading, category, isRefreshing } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoryAction(id));
  }, [dispatch, id]);

  const refresh = () => {
    dispatch(refreshCategoryAction(id));
  };

  return { isLoading, category, refresh, isRefreshing };
};

export default useCategory;
