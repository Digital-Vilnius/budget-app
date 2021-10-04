import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '@features/auth/hooks';
import { authNavigator, mainNavigator } from './types';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const RootNavigator: FC = () => {
  const { isLogged } = useAuth();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions}>
        {!isLogged && <RootStack.Screen name={authNavigator} component={AuthNavigator} />}
        {isLogged && <RootStack.Screen name={mainNavigator} component={MainNavigator} />}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
