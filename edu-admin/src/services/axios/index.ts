import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { store } from '@/redux/store';
import { isLoggedOut } from '@/redux/slice/checkLoginSlice';
import { refreshtoken } from '@/services/loginApi';
import { redirect } from 'react-router-dom';

let refresh = false;
const dispatch = store.dispatch;

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/',
});

instance.interceptors.response.use(
  (response) => {
    // Thêm các xử lý sau khi nhận được response (nếu cần)
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      dispatch(isLoggedOut());
    }

    if (error.response.status === 403 && !refresh) {
      refresh = true;
      dispatch(isLoggedOut());
      // const res = await refreshtoken();
      // console.log(res.status);
    }

    refresh = false;
    console.error('Request failed:', error);
    throw error;
  },
);

export async function get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response = await instance.get<T>(endpoint, config);
    return response.data as T;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
}

export async function post<T>(endpoint: string, data: T, config?: AxiosRequestConfig): Promise<T> {
  try {
    const headers = data instanceof FormData ? { 'Content-Type': 'multipart/form-data' } : {};
    const response = await instance.post<T>(endpoint, data, { ...config, headers });
    if (response.status === 200) {
      alert('Thành công');
    }
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
}

export async function put<T>(endpoint: string, data: T, config?: AxiosRequestConfig): Promise<T> {
  try {
    const headers = data instanceof FormData ? { 'Content-Type': 'multipart/form-data' } : {};
    const response = await instance.put<T>(endpoint, data, { ...config, headers });
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
}

export async function del<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response = await instance.delete(endpoint, config);
    return response.data;
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error;
  }
}
