import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { spacesRoute } from './types';
import { SpacesScreen } from '@features/spaces/screens';

const MainStack = createStackNavigator();

const screenOptions = {
  headerShown: true,
};

const MainNavigator: FC = () => {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen name={spacesRoute} component={SpacesScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
