import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer: FC<ScreenContainerProps> = (props) => {
  const { children } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenContainer;
