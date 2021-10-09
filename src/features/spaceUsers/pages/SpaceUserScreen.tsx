import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { SpaceUserRoute } from '@navigation/types';
import { SpaceUserLoader, SpaceUser } from '@features/spaceUsers/containers';
import { ScreenContainer } from '@common/components';

const SpaceUserScreen: FC<StackScreenProps<MainStackParamList, SpaceUserRoute>> = (props) => {
  const { route } = props;
  const { params } = route;
  const { id } = params;

  return (
    <ScreenContainer>
      <SpaceUserLoader id={id}>
        <SpaceUser />
      </SpaceUserLoader>
    </ScreenContainer>
  );
};

export default SpaceUserScreen;
