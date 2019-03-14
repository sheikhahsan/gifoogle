<template>
  <div class="card-columns">
    <div
      class="card"
      v-for="obj in gifs"
      :key="obj.id"
    >
      <img
        :src="fullUrl(obj.id)"
        width="270px"
      />
    </div>
  </div>
</template>

<script>
import * as Util from "../utils";
export default {
  name: 'CardColumns',
  props: {
    gifs: {
      type: Array,
      required: true
    }
  },
  methods: {
    fullUrl: gifId => {
      return Util.getFullUrl(gifId)
    }
  }
};
</script>

<style lang="scss" scoped>
.card-columns {
  column-count: 4;
  .card {
    width: 270px;
    border: none;
  }
}
</style>
