import React, { FC } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useRegister } from '@features/auth/hooks';
import { Button, Description, Input, Link, Title } from '@common/components';
import { Controller } from 'react-hook-form';
import { bottomSpacings, sizes, spacings } from '@styles/constants';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '@navigation/AuthNavigator';
import { loginRoute } from '@navigation/types';

const Registration: FC = () => {
  const { control, handleSubmit, register, isLoading } = useRegister();
  const { navigate } = useNavigation<StackNavigationProp<AuthStackParamList>>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Title containerStyle={bottomSpacings.m} text="Welcome" />
          <Description containerStyle={bottomSpacings.l}>
            <Description>Create your account or </Description>
            <Link text="Login" onPress={() => navigate(loginRoute)} />
          </Description>
        </View>
        <View>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                containerStyle={bottomSpacings.l}
                placeholder="Enter your first name"
                onBlur={onBlur}
                disabled={isLoading}
                label="First name"
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                containerStyle={bottomSpacings.l}
                placeholder="Enter your last name"
                onBlur={onBlur}
                disabled={isLoading}
                label="Last name"
                onChange={onChange}
                value={value}
              />
            )}
          />
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
        <Button disabled={isLoading} onPress={handleSubmit(register)} label="Register" />
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

export default Registration;
