import React, { FC } from 'react';
import { Login } from '@features/auth/containers';
import { ScreenContainer } from '@common/components';

const LoginScreen: FC = () => {
  return (
    <ScreenContainer>
      <Login />
    </ScreenContainer>
  );
};

export default LoginScreen;
