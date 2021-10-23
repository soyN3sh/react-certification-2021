import { REACT_APP_API_KEY } from './constants';

const resolveUrl = (endpoint, apiParams) => {
  const BASE_URL = `https://youtube.googleapis.com/youtube/v3/${endpoint}?part=snippet&key=${REACT_APP_API_KEY}`;
  // const BASE_URL = 'youtube-videos-mock.json';
  const params = Object.keys(apiParams);
  // params = [];
  const urlWithParams = params.reduce((url, param) => {
    let newQueryParam = ``;
    newQueryParam = `&${param}=${encodeURI(apiParams[param])}`;
    return `${url}${newQueryParam}`;
  }, BASE_URL);
  return urlWithParams;
};

export { resolveUrl };
