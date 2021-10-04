import axios from 'axios';
import promise from 'promise';
import { store } from '@store';
import { ToastService } from '@core/toast';
import { logoutAction, refreshTokenAction } from '@features/auth/actions';

const httpClient = axios.create({
  baseURL: 'http://192.168.1.187:5000/api',
});

httpClient.interceptors.request.use(
  async (request) => {
    const token = store.getState().auth.token;
    if (token && request.headers) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => promise.reject(error)
);

httpClient.interceptors.response.use(
  async (response) => response.data,
  async (error) => {
    console.log(error);
    const { isRefreshing, refreshToken } = store.getState().auth;
    const { response, config } = error;
    const { status } = response;

    switch (status) {
      case 401: {
        if (!isRefreshing) {
          await store.dispatch(refreshTokenAction({ refreshToken })).unwrap();
          return httpClient(config);
        }

        ToastService.error('errors.token_expired');
        store.dispatch(logoutAction());
        break;
      }

      case 403: {
        ToastService.error('errors.access_restricted');
        break;
      }

      case 404: {
        ToastService.error('errors.not_found');
        break;
      }

      default: {
        ToastService.error('errors.an_error_has_occurred');
        break;
      }
    }

    return Promise.reject(error);
  }
);

export default httpClient;
