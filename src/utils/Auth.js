export const BASE_URL = 'https://newsexplorer.abrosimov.site/api';

export const register = ({ email, password, name }) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password, name }),
}).then((res) => {
  if (res.status === 201) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка при регистрации, статус при получении данных с сервера: ${res.status}`));
});

export const login = ({ email, password }) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка при аунтефикации, статус при получении данных с сервера: ${res.status}`));
}).then((data) => {
  if (data.token) {
    localStorage.setItem('token', data.token);
    return data;
  }
  return Promise.reject(new Error(`Ошибка при получении токена, данные пришедшие с сервера: ${data}`));
});

export const getInfoLogin = (token) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
}).then((res) => res.json());
