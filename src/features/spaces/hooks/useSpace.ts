import { useAppDispatch, useAppSelector } from '@store';
import { useEffect } from 'react';
import { getSpaceAction } from '@features/spaces/actions';

const useSpace = (id: string) => {
  const { isLoading, space } = useAppSelector((state) => state.spaces);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSpaceAction(id));
  }, [dispatch, id]);

  return { isLoading, space };
};

export default useSpace;
