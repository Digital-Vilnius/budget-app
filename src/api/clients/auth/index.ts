import httpClient from '../../httpClient';
import { LoginRequest, RefreshTokenRequest, RegisterRequest, TokenPayload } from './types';
import { ResultResponse } from '@api/types';

const baseUrl = '/authentication';

export const login = async (request: LoginRequest) => {
  return httpClient.post<LoginRequest, ResultResponse<TokenPayload>>(`${baseUrl}/login`, request);
};

export const register = async (request: RegisterRequest) => {
  return httpClient.post<RegisterRequest, ResultResponse<TokenPayload>>(
    `${baseUrl}/register`,
    request
  );
};

export const refreshToken = async (request: RefreshTokenRequest) => {
  return httpClient.post<RefreshTokenRequest, ResultResponse<TokenPayload>>(
    `${baseUrl}/refreshToken`,
    request
  );
};
