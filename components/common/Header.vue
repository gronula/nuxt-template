<template lang="pug">
  header
    h1: nuxt-link.clr-black(to='/')
    Navigation
</template>

<script>
  import Navigation from '~/components/common/Navigation'
  export default {
    components: {
      Navigation,
    },
  }
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
