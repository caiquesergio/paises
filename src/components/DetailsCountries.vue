<template>
  <div>
    <p>Olá</p>
  </div>
</template>

<script>
export default {
  data() {
    return;
  },
  props: {
    method: Function,
  },
  mounted() {
    this.method();
  },
};
</script>

<style>
</style>