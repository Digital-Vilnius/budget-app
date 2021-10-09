import React, { FC } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useLogin } from '@features/auth/hooks';
import { Button, Description, Input, Link, Title } from '@common/components';
import { Controller } from 'react-hook-form';
import { bottomSpacings, sizes, spacings } from '@styles/constants';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '@navigation/AuthNavigator';
import { registrationRoute } from '@navigation/types';

const Login: FC = () => {
  const { control, handleSubmit, login, isLoading } = useLogin();
  const { navigate } = useNavigation<StackNavigationProp<AuthStackParamList>>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Title containerStyle={bottomSpacings.m} text="Welcome back" />
          <Description containerStyle={bottomSpacings.l}>
            <Description>Don’t have an account? </Description>
            <Link text="Sign up" onPress={() => navigate(registrationRoute)} />
          </Description>
        </View>
        <View>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                containerStyle={bottomSpacings.l}
                placeholder="Enter your email"
                onBlur={onBlur}
                disabled={isLoading}
                label="Email"
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                placeholder="Enter your password"
                disabled={isLoading}
                label="Password"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button disabled={isLoading} onPress={handleSubmit(login)} label="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    padding: spacings.padding,
  },
  footer: {
    padding: spacings.padding,
  },
});

export default Login;
