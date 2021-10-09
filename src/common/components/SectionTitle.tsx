import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, fonts } from '@styles/constants';

export interface SectionTitleProps {
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const SectionTitle: FC<SectionTitleProps> = (props) => {
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
    fontSize: 20,
    lineHeight: 26,
  },
});

export default SectionTitle;
