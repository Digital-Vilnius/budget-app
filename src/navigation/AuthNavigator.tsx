import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegistrationScreen } from '@features/auth/screens';
import { loginRoute, registrationRoute } from '@navigation/types';

export type AuthStackParamList = {
  [loginRoute]: undefined;
  [registrationRoute]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const screenOptions = {
  headerShown: false,
};

const AuthNavigator: FC = () => {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name={loginRoute} component={LoginScreen} />
      <AuthStack.Screen name={registrationRoute} component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
