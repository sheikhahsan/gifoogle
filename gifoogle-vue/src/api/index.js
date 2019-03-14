import {
  API_HOST,
  API_KEY,
  TRENDING_PATH,
  RANDOM_PATH,
  SEARCH_PATH
} from './constants';

const TRENDING_URL = `${API_HOST}${TRENDING_PATH}?api_key=${API_KEY}&limit=30`;
const RANDOM_URL = `${API_HOST}${RANDOM_PATH}?api_key=${API_KEY}&limit=30`;
const SEARCH_URL = `${API_HOST}${SEARCH_PATH}?api_key=${API_KEY}&limit=30`;
const $ = require('jquery');

const getTrendingGifs = () => {
  var xhr = $.get(TRENDING_URL);
  return xhr.done(data => data);
};

const getRandomGif = () => {
  var xhr = $.get(RANDOM_URL);
  return xhr.done(data => data);
};

const getGifsByQuery = query => {
  var xhr = $.get(`${SEARCH_URL}&q=${query}`);
  return xhr.done(data => data);
};

export default {
  getTrendingGifs,
  getRandomGif,
  getGifsByQuery
};
