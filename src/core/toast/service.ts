import { showMessage } from 'react-native-flash-message';

export const success = (message: string) => {
  showMessage({ message, type: 'success' });
};

export const error = (message: string) => {
  showMessage({ message, type: 'danger' });
};
