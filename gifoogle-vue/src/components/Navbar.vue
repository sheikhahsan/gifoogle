<template>
  <nav class="nav">
    <router-link class="navbar-brand" tag="a" to="/">Gifoogle</router-link>
    <router-link
      class="nav-link"
      :class="{ active: activeLink === '/' }"
      tag="a"
      to="/"
    >
      Home
    </router-link>
    <router-link
      class="nav-link"
      :class="{ active: activeLink === '/trending' }"
      tag="a"
      to="/trending"
    >
      Trending
    </router-link>
    <router-link
      class="nav-link"
      :class="{ active: activeLink === '/random' }"
      tag="a"
      to="/random"
    >
      Random
    </router-link>
    <a href="https://giphy.com/" class="ml-auto" target="_blank">
      <img src="../assets/Poweredby_640px-Black_HorizLogo.png" height="30px" />
    </a>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
      activeLink: 'activeRoute'
    })
  }
};
</script>

<style lang="scss">
.nav {
  padding: 15px 0;
  align-items: center;
  .navbar-brand {
    font-size: 25px;
    color: #ffffff;
    font-weight: bold;
  }
  .nav-link {
    color: #ffffff;
    &.active,
    &:hover {
      color: #007bff;
    }
  }
}
</style>
