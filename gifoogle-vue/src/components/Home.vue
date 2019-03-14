<template>
  <div>
    <search-bar />
    <card-columns :gifs="searchGifs" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SearchBar from './SearchBar';
import CardColumns from '../views/CardColumns';
export default {
  name: 'Home',
  components: {
    SearchBar,
    CardColumns
  },
  computed: {
    ...mapGetters({
      searchGifs: `searchGifs`
    })
  }
};
</script>
