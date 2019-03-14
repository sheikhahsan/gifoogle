import API from '../api';

const getTrendingGifs = context => {
  API.getTrendingGifs()
    .then(results => {
      context.commit('TRENDING_GIFS_LOADED', results.data);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

const getRandomGif = context => {
  API.getRandomGif()
    .then(results => {
      context.commit('RANDOM_GIF_LOADED', results.data);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

const getGifsByQuery = (context, query) => {
  API.getGifsByQuery(query)
    .then(results => {
      context.commit('SEARCH_GIFS_LOADED', results.data);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

const setActiveRoute = (context, route) => {
  context.commit('SET_ACTIVE_ROUTE', route);
};

export default {
  getTrendingGifs,
  getRandomGif,
  getGifsByQuery,
  setActiveRoute
};
