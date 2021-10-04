import React, { FC } from 'react';
import { ScreenContainer } from '@common/components';
import { Spaces } from '@features/spaces/containers';

const SpacesScreen: FC = () => {
  return (
    <ScreenContainer>
      <Spaces />
    </ScreenContainer>
  );
};

export default SpacesScreen;
