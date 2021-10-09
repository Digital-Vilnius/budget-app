import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, fonts } from '@styles/constants';

export interface DescriptionProps {
  children: string | React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const Description: FC<DescriptionProps> = (props) => {
  const { children, containerStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    color: colors.text.secondary,
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    lineHeight: 20,
  },
});

export default Description;
