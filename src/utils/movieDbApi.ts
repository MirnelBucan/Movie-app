import axios from 'axios';
import { API_URL } from '../const';

const url = API_URL;
const movieDbApi = axios.create({
  baseURL: url,
  responseType: 'json',
});

movieDbApi.interceptors.request.use(
  (config) => {
    /* eslint-disable */
    config.params = config.params || {};
    config.params.api_key = process.env.REACT_APP_MOVIEDB_API_KEY;
    /* eslint-enable */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default movieDbApi;
