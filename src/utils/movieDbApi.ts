import axios from 'axios';

const url = process.env.API_URL || 'https://api.themoviedb.org/3';
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
