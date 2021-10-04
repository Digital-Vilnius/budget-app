import { useAppDispatch, useAppSelector } from '@store';
import { RegisterFormData } from '@features/auth/types';
import { registerAction } from '@features/auth/actions';

const useRegister = () => {
  const { isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const register = (request: RegisterFormData) => {
    return dispatch(registerAction(request)).unwrap();
  };

  return { register, isLoading };
};

export default useRegister;
