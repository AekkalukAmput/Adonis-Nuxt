<template>
  <v-overlay v-if="loading" :value="overlay">
    <v-progress-circular
      indeterminate
      size="100"
      :width="7"
      color="green"
    ></v-progress-circular>
  </v-overlay>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      overlay: false,
    };
  },
  methods: {
    start() {
      this.loading = true;
      this.overlay = true;
    },
    finish() {
      this.loading = false;
      this.overlay = false;
    },
  },
};
</script>
<style scoped>
.v-progress-circular {
  color: #41b883;
  z-index: inherit;
}
</style>