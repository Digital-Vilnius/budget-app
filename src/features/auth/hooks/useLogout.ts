import { useAppDispatch } from '@store';
import { logoutAction } from '@features/auth/actions';

const useLogout = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  return { logout };
};

export default useLogout;
