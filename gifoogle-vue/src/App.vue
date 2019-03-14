<template>
  <div id="app" class="container">
    <navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  created() {
    this.$store.dispatch('getTrendingGifs');
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
body {
  background: #000000;
  color: #ffffff;
  background-image: url('https://media.giphy.com/media/rXjhFP0JzbU1G/source.gif');
}
</style>
