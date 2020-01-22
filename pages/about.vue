<template lang="pug">
  div
    .svg-icon
      svg-icon(name='tick')

</template>

<script>
  export default {
    head: () => ({ title: 'About page' }),
  }
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
  }

  // .svg-icon {
  //   overflow: hidden;
  //   position: relative;
  //   align-self: center;
  //   width: 100px;
  //   height: 100px;
  //   margin-top: 20px;
  //   margin-bottom: 20px;
  //   color: #0dca16;
  //   border-radius: 50%;
  //   box-shadow: 0 0 0 0 #ff0000;
  //   transition: 0.35s linear;

  //   &::before {
  //     content: '';
  //     position: absolute;
  //     z-index: 1;
  //     top: 1px;
  //     bottom: 1px;
  //     left: 1px;
  //     right: 1px;
  //     border-radius: 50%;
  //     background-color: #ffffff;
  //     transition: 0.35s linear;
  //   }

  //   &:hover {
  //     box-shadow: 0 0 0 3px #ff0000;

  //     &::before {
  //       left: 100%;
  //     }
  //   }

  //   svg {
  //     position: absolute;
  //     top: 50%;
  //     left: 50%;
  //     width: 70%;
  //     height: 70%;
  //     transform: translate(-50%, -50%);
  //   }
  // }

  button {
    padding: 2rem;
    color: #ffffff;
    border: 0;
    background-color: #333333;

    &:hover {
      background-color: rgba(#333333, 0.6);
    }
  }
</style>
