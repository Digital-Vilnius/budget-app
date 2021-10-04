import { useAppSelector } from '@store';

const useAuth = () => {
  const { isLogged } = useAppSelector((state) => state.auth);
  return { isLogged };
};

export default useAuth;
