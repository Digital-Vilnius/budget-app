import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { OperationRoute } from '@navigation/types';
import { Operation, OperationLoader } from '@features/operations/containers';
import { ScreenContainer } from '@common/components';

const OperationScreen: FC<StackScreenProps<MainStackParamList, OperationRoute>> = (props) => {
  const { route } = props;
  const { params } = route;
  const { id } = params;

  return (
    <ScreenContainer>
      <OperationLoader id={id}>
        <Operation />
      </OperationLoader>
    </ScreenContainer>
  );
};

export default OperationScreen;
