import React, { FC } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { colors } from '@styles/constants';

export interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer: FC<ScreenContainerProps> = (props) => {
  const { children } = props;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default ScreenContainer;
