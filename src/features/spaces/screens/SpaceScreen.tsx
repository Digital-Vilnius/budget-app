import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { SpaceRoute } from '@navigation/types';
import { Space, SpaceLoader } from '@features/spaces/containers';
import { ScreenContainer } from '@common/components';

const SpaceScreen: FC<StackScreenProps<MainStackParamList, SpaceRoute>> = (props) => {
  const { route } = props;
  const { params } = route;
  const { id } = params;

  return (
    <ScreenContainer>
      <SpaceLoader id={id}>
        <Space />
      </SpaceLoader>
    </ScreenContainer>
  );
};

export default SpaceScreen;
