import { useAppDispatch, useAppSelector } from '@store';
import { RegisterFormData } from '@features/auth/types';
import { registerAction } from '@features/auth/actions';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const getSchema = () => {
  const schema = yup.object().shape({
    email: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().required(),
  });

  return schema.required();
};

const initialFormData: RegisterFormData = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const useRegister = () => {
  const { isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const register = (request: RegisterFormData) => {
    return dispatch(registerAction({ ...request, locale: 'en' })).unwrap();
  };

  return { register, isLoading, control, handleSubmit };
};

export default useRegister;
