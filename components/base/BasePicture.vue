<template lang="pug">
  div
    picture
      source(
        v-if="webp"
        type=`image/webp`
        :media="`(min-width: ${minScreenWidth})`"
        :srcset="`\
          ${require(`~/assets/img/${desktopName}${retina ? `@1x` : ``}.${desktopExtension}?webp`)}${retina ? ` 1x` : ``}, \
          ${require(`~/assets/img/${desktopName}${retina ? `@2x` : ``}.${desktopExtension}?webp`)}${retina ? ` 2x` : ``}`"
      )
      source(
        v-if="webp"
        type=`image/webp`
        :srcset="`\
          ${require(`~/assets/img/${mobileName}${retina ? `@1x` : ``}.${mobileExtension}?webp`)}${retina ? ` 1x` : ``}, \
          ${require(`~/assets/img/${mobileName}${retina ? `@2x` : ``}.${mobileExtension}?webp`)}${retina ? ` 2x` : ``}`"
      )
      source(
        :media="`(min-width: ${minScreenWidth})`"
        :srcset="`\
          ${require(`~/assets/img/${desktopName}${retina ? `@1x` : ``}.${desktopExtension}`)}${retina ? ` 1x` : ``}, \
          ${require(`~/assets/img/${desktopName}${retina ? `@2x` : ``}.${desktopExtension}`)}${retina ? ` 2x` : ``}`"
      )
      img.picture__img.trs(
        :class="imgClass"
        :src="`\
          ${require(`~/assets/img/${mobileName}${retina ? `@1x` : ``}.${mobileExtension}`)}`"
        :srcset="`\
          ${require(`~/assets/img/${mobileName}${retina ? `@1x` : ``}.${mobileExtension}`)}${retina ? ` 1x` : ``}, \
          ${require(`~/assets/img/${mobileName}${retina ? `@2x` : ``}.${mobileExtension}`)}${retina ? ` 2x` : ``}`"
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
      webp: {
        type: Boolean,
        default: true,
      },
      retina: {
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
