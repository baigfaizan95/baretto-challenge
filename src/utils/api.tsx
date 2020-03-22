import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      // Network Error.
      return Promise.reject({ message: 'Network Error' });
    }
    return Promise.reject(error.response);
  }
);

const getRequest = (url: string, params: object = {}) => {
  return instance
    .get(url, { params })
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

const postRequest = (url: string, body: object) => {
  return instance
    .post(url, body)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

const deleteRequest = (url: string) => {
  return instance
    .delete(`${url}`)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

const updateRequest = (url: string, body: object) => {
  return instance
    .post(url, body)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

export default { getRequest, postRequest, deleteRequest, updateRequest };
