<template lang="pug">
  nav
    nuxt-link.nav-item.clr-black.trs(to='/about') About page
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  nav {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .nav-item {
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      opacity: 0.8;
    }
  }
</style>
