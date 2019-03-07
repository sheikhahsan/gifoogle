import API from "../api";
import * as types from "./actionTypes";

export const getTrendingGifs = () => dispatch => {
  API.getTrendingGifs()
    .then(results => {
      dispatch({
        type: types.GET_TRENDING_GIFS,
        trendingGifs: results.data
      });
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const getRandomGif = () => dispatch => {
  API.getRandomGif()
    .then(results => {
      dispatch({
        type: types.GET_RANDOM_GIF,
        randomGif: results.data
      });
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const getGifsByQuery = query => dispatch => {
  API.getGifsByQuery(query)
    .then(results => {
      dispatch({
        type: types.SEARCH_GIF,
        searchGifs: results.data
      });
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

const setActiveRoute = (context, route) => {
  context.commit("SET_ACTIVE_ROUTE", route);
};
