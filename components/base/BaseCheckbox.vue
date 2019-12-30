<template lang="pug">
  div.wrapper(ref='input')
    input.input.visually-hidden(
      :class="inputClass"
      :type='type'
      :id="id",
      :name="name",
      :required="required",
    )
    label.label.trs(
      :class="labelClass"
      :for="id"
    )
      span.box
      slot(name='label')
</template>

<script>
  export default {
    props: {
      inputClass: {
        type: String,
        default: ``,
      },
      type: {
        type: String,
        default: `checkbox`,
      },
      id: {
        type: String,
        default: ``,
      },
      name: {
        type: String,
        default: ``,
      },
      required: {
        type: Boolean,
        default: false,
      },
      labelClass: {
        type: String,
        default: ``,
      },
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .label {
    position: relative;
    align-self: flex-start;
    padding-left: 2rem;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
  }

  .box {
    position: absolute;
    top: 50%;
    left: 0;
    width: 1rem;
    height: 1rem;
    border: 1px solid #000000;
    transform: translateY(-50%);

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 1px;
      background-color: #000000;
      opacity: 0;
      transition: $trs;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    .input:checked + .label & {
      &::before,
      &::after {
        opacity: 1;
      }
    }

    .input[type='radio'] + .label & {
      border-radius: 50%;

      &::before {
        width: 60%;
        height: 60%;
        border-radius: 50%;
      }

      &::after {
        display: none;
      }
    }
  }
</style>
