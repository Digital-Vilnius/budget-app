import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors, fonts } from '@styles/constants';

export interface LinkProps {
  text: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const Link: FC<LinkProps> = (props) => {
  const { text, containerStyle, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    textAlign: 'center',
    color: colors.primary,
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    lineHeight: 20,
  },
});

export default Link;
