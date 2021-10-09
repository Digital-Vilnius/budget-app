import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { reducer as authReducer } from '@features/auth/slice';
import { reducer as spacesReducer } from '@features/spaces/slice';
import { reducer as categoriesReducer } from '@features/categories/slice';
import { reducer as operationsReducer } from '@features/operations/slice';
import { reducer as spaceUsersReducer } from '@features/spaceUsers/slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'spaces'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  spaces: spacesReducer,
  categories: categoriesReducer,
  operations: operationsReducer,
  spaceUsers: spaceUsersReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger, thunk);
  },
});

const persistor = persistStore(store);
// persistor.purge();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, persistor, useAppDispatch, useAppSelector };
