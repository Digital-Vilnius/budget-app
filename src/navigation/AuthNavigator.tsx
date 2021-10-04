import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@features/auth/screens';
import { loginRoute } from '@navigation/types';

const AuthStack = createStackNavigator();

const screenOptions = {
  headerShown: true,
};

const AuthNavigator: FC = () => {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name={loginRoute} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
