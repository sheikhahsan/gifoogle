import Vue from 'vue';
import Router from 'vue-router';
import Home from '../src/components/Home';
import Trending from '../src/components/Trending';
import Random from '../src/components/Random';
import store from './store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: function(to, from, next) {
        store.dispatch('setActiveRoute', '/');
        next();
      }
    },
    {
      path: '/trending',
      name: 'trending',
      component: Trending,
      beforeEnter: function(to, from, next) {
        store.dispatch('setActiveRoute', '/trending');
        next();
      }
    },
    {
      path: '/random',
      name: 'random',
      component: Random,
      beforeEnter: function(to, from, next) {
        store.dispatch('setActiveRoute', '/random');
        store.dispatch('getRandomGif');
        next();
      }
    }
  ]
});
