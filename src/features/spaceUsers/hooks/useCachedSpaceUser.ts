import { useAppSelector } from '@store';

const useCachedSpaceUser = () => {
  const { isLoading, spaceUser } = useAppSelector((state) => state.spaceUsers);
  if (isLoading || !spaceUser) throw new Error('Space user is not loaded');

  return { isLoading, spaceUser };
};

export default useCachedSpaceUser;
