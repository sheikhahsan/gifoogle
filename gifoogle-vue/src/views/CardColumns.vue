<template>
  <div class="card-columns" style="column-count: 4">
    <div
      class="card"
      v-for="obj in gifs"
      :key="obj.id"
      style="width: 270px; border: none;"
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
