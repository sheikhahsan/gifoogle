import { combineReducers } from "redux";
import * as types from "./actionTypes";

const initialState = {
  searchGifs: [],
  trendingGifs: [],
  randomGif: {}
}

const gifs = (state = initialState, action) => {

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
