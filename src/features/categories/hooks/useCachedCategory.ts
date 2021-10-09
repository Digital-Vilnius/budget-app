import { useAppSelector } from '@store';

const useCachedCategory = () => {
  const { isLoading, category } = useAppSelector((state) => state.categories);
  if (isLoading || !category) throw new Error('Category is not loaded');

  return { isLoading, category };
};

export default useCachedCategory;
