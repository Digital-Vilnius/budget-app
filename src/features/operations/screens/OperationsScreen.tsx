import React, { FC } from 'react';
import { ScreenContainer } from '@common/components';
import { Operations } from '@features/operations/containers';

const OperationsScreen: FC = () => {
  return (
    <ScreenContainer>
      <Operations />
    </ScreenContainer>
  );
};

export default OperationsScreen;
