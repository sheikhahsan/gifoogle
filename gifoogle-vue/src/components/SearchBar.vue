<template>
  <form @submit.prevent="onSubmit">
    <h5>Search all GIPHY GIFs</h5>
    <div class="form-group">
      <input class="form-control" v-model="query" />
      <button class="btn btn-primary" type="submit">Search</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      query: ''
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('getGifsByQuery', this.query);
    }
  }
};
</script>

<style lang="scss" scoped>
.form-group {
  display: flex;
  input {
    border-radius: 0;
  }
  button {
    border-radius: 0;
  }
}
</style>
