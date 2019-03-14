import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  activeRoute: '',
  searchGifs: [],
  trendingGifs: [],
  randomGif: {}
};

export default {
  state,
  mutations,
  actions,
  getters
};
