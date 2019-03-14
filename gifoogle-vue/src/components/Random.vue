<template>
  <div>
    <img
      :src="`https://media.giphy.com/media/${randomGif.id}/giphy.gif`"
      width="100%"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Trending',
  computed: {
    ...mapGetters({
      randomGif: `randomGif`
    })
  }
};
</script>

<style lang="scss"></style>
