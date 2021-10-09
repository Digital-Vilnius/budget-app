import { StyleProp, TextInput, ViewStyle, StyleSheet, View, Text } from 'react-native';
import React, { FC } from 'react';
import { boxShadows, colors, fonts, sizes } from '@styles/constants';

export interface InputProps {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const Input: FC<InputProps> = (props) => {
  const { onChange, disabled, style, onBlur, placeholder, label, containerStyle } = props;

  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={colors.text.tertiary}
        placeholder={placeholder}
        onBlur={onBlur}
        editable={!disabled}
        style={[styles.input, style]}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: sizes.xs,
    fontFamily: fonts.primary.semiBold,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text.primary,
  },
  input: {
    ...boxShadows.primary,
    height: 54,
    borderRadius: sizes.s,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.m,
    color: colors.text.secondary,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Input;
