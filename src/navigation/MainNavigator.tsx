import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  spaceRoute,
  spacesRoute,
  categoriesRoute,
  categoryRoute,
  operationRoute,
  operationsRoute,
  spaceUserRoute,
  spaceUsersRoute,
} from './types';
import { SpaceScreen, SpacesScreen } from '@features/spaces/screens';
import { CategoriesScreen, CategoryScreen } from '@features/categories/screens';
import { OperationScreen, OperationsScreen } from '@features/operations/screens';
import { SpaceUserScreen, SpaceUsersScreen } from '@features/spaceUsers/pages';

export type MainStackParamList = {
  [spacesRoute]: undefined;
  [spaceRoute]: { id: string; title: string };
  [categoriesRoute]: undefined;
  [categoryRoute]: { id: string; name: string };
  [operationsRoute]: undefined;
  [operationRoute]: { id: string };
  [spaceUsersRoute]: undefined;
  [spaceUserRoute]: { id: string; email: string };
};

const MainStack = createStackNavigator<MainStackParamList>();

const screenOptions = {
  headerShown: false,
};

const MainNavigator: FC = () => {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen name={spacesRoute} component={SpacesScreen} />
      <MainStack.Screen name={spaceRoute} component={SpaceScreen} />
      <MainStack.Screen name={categoriesRoute} component={CategoriesScreen} />
      <MainStack.Screen name={categoryRoute} component={CategoryScreen} />
      <MainStack.Screen name={operationsRoute} component={OperationsScreen} />
      <MainStack.Screen name={operationRoute} component={OperationScreen} />
      <MainStack.Screen name={spaceUsersRoute} component={SpaceUsersScreen} />
      <MainStack.Screen name={spaceUserRoute} component={SpaceUserScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
