import React, { FC } from 'react';
import { Registration } from '@features/auth/containers';
import { ScreenContainer } from '@common/components';

const RegistrationScreen: FC = () => {
  return (
    <ScreenContainer>
      <Registration />
    </ScreenContainer>
  );
};

export default RegistrationScreen;
