import React, { FC } from 'react';
import { ScreenContainer } from '@common/components';
import { SpaceUsers } from '@features/spaceUsers/containers';

const SpaceUsersScreen: FC = () => {
  return (
    <ScreenContainer>
      <SpaceUsers />
    </ScreenContainer>
  );
};

export default SpaceUsersScreen;
