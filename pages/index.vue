<template lang="pug">
  div
    h1 Main page
</template>

<script>
  export default {
    head: () => ({ title: 'Main page' }),
    data: () => ({}),
  }
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
