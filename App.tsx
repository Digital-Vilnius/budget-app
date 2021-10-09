import React, { FC } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import RootNavigator from '@navigation/RootNavigator';
import { store, persistor } from '@store';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { fonts } from '@styles/constants';

const App: FC = () => {
  const [loaded] = useFonts({
    [fonts.primary.light]: require('./assets/fonts/SFUIText-Light.ttf'),
    [fonts.primary.regular]: require('./assets/fonts/SFUIText-Regular.ttf'),
    [fonts.primary.medium]: require('./assets/fonts/SFUIText-Medium.ttf'),
    [fonts.primary.semiBold]: require('./assets/fonts/SFUIText-Semibold.ttf'),
    [fonts.primary.bold]: require('./assets/fonts/SFUIText-Bold.ttf'),
    [fonts.primary.extraBold]: require('./assets/fonts/SFUIText-Heavy.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
        <StatusBar />
        <RootNavigator />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
};

export default App;
