import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, fonts } from '@styles/constants';

export interface TitleProps {
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const Title: FC<TitleProps> = (props) => {
  const { text, containerStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: colors.text.primary,
    fontFamily: fonts.primary.extraBold,
    fontSize: 24,
    lineHeight: 28,
  },
});

export default Title;
