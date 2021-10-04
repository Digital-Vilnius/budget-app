import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginRequest, TokenPayload } from '@api/clients/auth/types';
import { AuthClient } from '@api/clients';
import { RefreshTokenRequest, RegisterRequest } from '@api/clients/auth/types';

export const loginAction = createAsyncThunk<TokenPayload, LoginRequest>(
  'login',
  async (request: LoginRequest) => {
    const response = await AuthClient.login(request);
    return response.result;
  }
);

export const refreshTokenAction = createAsyncThunk<TokenPayload, RefreshTokenRequest>(
  'refreshToken',
  async (request: RefreshTokenRequest) => {
    const response = await AuthClient.refreshToken(request);
    return response.result;
  }
);

export const registerAction = createAsyncThunk<TokenPayload, RegisterRequest>(
  'register',
  async (request: RegisterRequest) => {
    const response = await AuthClient.register(request);
    return response.result;
  }
);

export const logoutAction = createAction('logout');
