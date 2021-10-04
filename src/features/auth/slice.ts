import {
  loginAction,
  logoutAction,
  refreshTokenAction,
  registerAction,
} from '@features/auth/actions';
import { createSlice } from '@reduxjs/toolkit';

interface State {
  isLoading: boolean;
  isRefreshing: boolean;
  isLogged: boolean;
  token: string | null;
  refreshToken: string | null;
}

const initialState: State = {
  isLoading: false,
  isLogged: false,
  isRefreshing: false,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(refreshTokenAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(refreshTokenAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(logoutAction, () => initialState);
    builder.addCase(registerAction.rejected, () => initialState);
    builder.addCase(refreshTokenAction.rejected, () => initialState);
    builder.addCase(loginAction.rejected, () => initialState);
  },
});

export const { reducer } = authSlice;
