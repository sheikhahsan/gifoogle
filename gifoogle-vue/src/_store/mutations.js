const TRENDING_GIFS_LOADED = (state, data) => {
  state.trendingGifs = data;
};

const RANDOM_GIF_LOADED = (state, data) => {
  state.randomGif = data;
};

const SEARCH_GIFS_LOADED = (state, data) => {
  state.searchGifs = data;
};

const SET_ACTIVE_ROUTE = (state, data) => {
  state.activeRoute = data;
};

export default {
  TRENDING_GIFS_LOADED,
  RANDOM_GIF_LOADED,
  SEARCH_GIFS_LOADED,
  SET_ACTIVE_ROUTE
};
