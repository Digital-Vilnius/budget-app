import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, fonts } from '@styles/constants';

export interface PageTitleProps {
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const PageTitle: FC<PageTitleProps> = (props) => {
  const { text, containerStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.text.primary,
    fontFamily: fonts.primary.bold,
    fontSize: 22,
    lineHeight: 28,
  },
});

export default PageTitle;
