import { useAppSelector } from '@store';

const useCachedSpace = () => {
  const { isLoading, space } = useAppSelector((state) => state.spaces);
  if (isLoading || !space) throw new Error('Space is not loaded');

  return { isLoading, space };
};

export default useCachedSpace;
