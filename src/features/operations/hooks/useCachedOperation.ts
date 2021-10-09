import { useAppSelector } from '@store';

const useCachedOperation = () => {
  const { isLoading, operation } = useAppSelector((state) => state.operations);
  if (isLoading || !operation) throw new Error('Operation is not loaded');

  return { isLoading, operation };
};

export default useCachedOperation;
