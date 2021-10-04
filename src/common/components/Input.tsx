import { StyleProp, TextInput, ViewStyle, StyleSheet } from 'react-native';
import React, { FC } from 'react';

export interface InputProps {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Input: FC<InputProps> = (props) => {
  const { onChange, disabled, style, onBlur, placeholder } = props;

  return (
    <TextInput
      placeholder={placeholder}
      onBlur={onBlur}
      editable={!disabled}
      style={[styles.input, style]}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default Input;
