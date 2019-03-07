import { combineReducers } from "redux";
import * as types from "./actionTypes";

const gifs = (state = [], action) => {
  switch (action.type) {
    case types.GET_RANDOM_GIF:
      return {
        ...state,
        randomGif: action.randomGif
      };
    case types.GET_TRENDING_GIFS:
      return {
        ...state,
        trendingGifs: action.trendingGifs
      };
    case types.SEARCH_GIF:
      return {
        ...state,
        searchGifs: action.searchGifs
      };
    default:
      return state;
  }
};

export default combineReducers({
  gifs
});
