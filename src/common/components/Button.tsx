import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { boxShadows, colors, fonts, sizes } from '@styles/constants';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button: FC<ButtonProps> = (props) => {
  const { label, onPress, disabled, style } = props;

  return (
    <TouchableOpacity style={[styles.container, style]} disabled={disabled} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: sizes.s,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: fonts.primary.bold,
  },
});

export default Button;
