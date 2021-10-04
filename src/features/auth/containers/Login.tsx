import React, { FC } from 'react';
import { View } from 'react-native';
import { useLogin } from '@features/auth/hooks';
import { Button, Input } from '@common/components';
import { Controller } from 'react-hook-form';

const Login: FC = () => {
  const { control, handleSubmit, login, isLoading } = useLogin();

  return (
    <View>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
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
      <Button disabled={isLoading} onPress={handleSubmit(login)} label="Login" />
    </View>
  );
};

export default Login;
