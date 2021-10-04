import React, { FC } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import RootNavigator from '@navigation/RootNavigator';
import { store, persistor } from '@store';
import { StatusBar } from 'expo-status-bar';

const App: FC = () => {
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
