<template>
  <div>
    <img
      :src="fullUrl"
      width="100%"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import * as Util from "../utils";
export default {
  name: 'Random',
  computed: {
    ...mapGetters({
      randomGif: `randomGif`
    }),
    ...{
      fullUrl() {
        return Util.getFullUrl(this.randomGif.id)
      }
    }
  }
};
</script>

<style lang="scss"></style>
