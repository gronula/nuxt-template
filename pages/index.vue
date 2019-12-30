<template lang="pug">
  div
    h1 Main page

    base-picture(
      :minScreenWidth="`1024px`"
      :desktopName="`bg-desktop`"
      :mobileName="`bg-mobile`"
      :alt="`Image`"
    )

    base-picture(
      :minScreenWidth="`1024px`"
      :desktopName="`bg-desktop`"
      :mobileName="`bg-mobile`"
      :needWebp="false"
      :alt="`Image`"
    )

    base-picture(
      :minScreenWidth="`1024px`"
      :desktopName="`icon`"
      :mobileName="`icon`"
      :needRetina="false"
      :alt="`Image`"
    )

    p {{media}} {{img}} {{ext}}
</template>

<script>
  export default {
    head: () => ({ title: 'Main page' }),
    data: () => ({
      media: `1024px`,
      img: `icon`,
      ext: `png`,
    }),
  }
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
