<template>
  <card-columns :gifs="trendingGifs" />
</template>
<script>
import { mapGetters } from 'vuex';
import CardColumns from '../views/CardColumns';
export default {
  name: 'Trending',
  components: {
    CardColumns
  },
  computed: {
    ...mapGetters({
      trendingGifs: `trendingGifs`
    })
  }
};
</script>

<style lang="scss"></style>
