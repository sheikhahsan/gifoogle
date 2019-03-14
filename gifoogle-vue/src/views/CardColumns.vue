<template>
  <div class="card-columns" style="column-count: 4">
    <div
      class="card"
      v-for="obj in gifs"
      :key="obj.id"
      style="width: 270px; border: none;"
    >
      <img
        :src="`https://media.giphy.com/media/${obj.id}/giphy.gif`"
        width="270px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardColumns',
  props: {
    gifs: {
      type: Array,
      required: true
    }
  }
};
</script>
