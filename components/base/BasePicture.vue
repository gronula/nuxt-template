<template lang="pug">
  div
    picture
      source(
        v-if="needWebp"
        type=`image/webp`
        :media="`(min-width: ${minScreenWidth})`"
        :srcset="`\
          ${require(`~/assets/img/${desktopName}${needRetina ? `@1x` : ``}.${desktopExtension}?webp`)}${needRetina ? ` 1x` : ``}, \
          ${require(`~/assets/img/${desktopName}${needRetina ? `@2x` : ``}.${desktopExtension}?webp`)}${needRetina ? ` 2x` : ``}`"
      )
      source(
        v-if="needWebp"
        type=`image/webp`
        :srcset="`\
          ${require(`~/assets/img/${mobileName}${needRetina ? `@1x` : ``}.${mobileExtension}?webp`)}${needRetina ? ` 1x` : ``}, \
          ${require(`~/assets/img/${mobileName}${needRetina ? `@2x` : ``}.${mobileExtension}?webp`)}${needRetina ? ` 2x` : ``}`"
      )
      source(
        :media="`(min-width: ${minScreenWidth})`"
        :srcset="`\
          ${require(`~/assets/img/${desktopName}${needRetina ? `@1x` : ``}.${desktopExtension}`)}${needRetina ? ` 1x` : ``}, \
          ${require(`~/assets/img/${desktopName}${needRetina ? `@2x` : ``}.${desktopExtension}`)}${needRetina ? ` 2x` : ``}`"
      )
      img.picture__img.trs(
        :class="imgClass"
        :src="`\
          ${require(`~/assets/img/${mobileName}${needRetina ? `@1x` : ``}.${mobileExtension}`)}`"
        :srcset="`\
          ${require(`~/assets/img/${mobileName}${needRetina ? `@1x` : ``}.${mobileExtension}`)}${needRetina ? ` 1x` : ``}, \
          ${require(`~/assets/img/${mobileName}${needRetina ? `@2x` : ``}.${mobileExtension}`)}${needRetina ? ` 2x` : ``}`"
        :alt="`${alt}`"
      )
</template>

<script>
  export default {
    props: {
      imgClass: {
        type: String,
        default: ``,
      },
      minScreenWidth: {
        type: String,
        default: `1024px`,
      },
      desktopName: {
        type: String,
        default: ``,
      },
      mobileName: {
        type: String,
        default: ``,
      },
      desktopExtension: {
        type: String,
        default: `png`,
      },
      mobileExtension: {
        type: String,
        default: `png`,
      },
      needWebp: {
        type: Boolean,
        default: true,
      },
      needRetina: {
        type: Boolean,
        default: true,
      },
      alt: {
        type: String,
        default: ``,
      },
    },
  }
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
  }

  picture {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .picture__img {
    display: flex;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;

    &--contain {
      object-fit: contain;
    }
  }
</style>
