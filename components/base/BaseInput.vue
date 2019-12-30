<template lang="pug">
  div.wrapper(ref='input')
    component.input.trs(
      :is="tag",
      :class="inputClass"
      :type="type",
      :id="id",
      :name="name",
      :placeholder="placeholder",
      :minlength="minLength",
      :pattern="pattern",
      :required="required",
      @focus="onFocus",
      @blur="onBlur",
      @input="$emit('input', $event.target.value)"
    )
    label.label.trs(
      :class="labelClass"
      :for="id"
    )
      slot(name='label')
    p.error.trs: slot(name='error')

</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: ``,
      },
      model: {
        type: String,
        default: ``,
      },
      tag: {
        type: String,
        default: `input`,
      },
      inputClass: {
        type: String,
        default: ``,
      },
      type: {
        type: String,
        default: `text`,
      },
      id: {
        type: String,
        default: ``,
      },
      name: {
        type: String,
        default: ``,
      },
      placeholder: {
        type: String,
        default: ``,
      },
      minLength: {
        type: Number,
        default: 0,
      },
      pattern: {
        type: String,
        default: `.*`,
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
    methods: {
      onFocus() {
        this.$refs.input.classList.add(`active`)
      },
      onBlur(evt) {
        if (!evt.currentTarget.value.trim().length) {
          this.$refs.input.classList.remove(`active`)
          this.$refs.input.classList.remove(`invalid`)
          return
        }

        if (!evt.currentTarget.validity.valid) {
          this.$refs.input.classList.add(`invalid`)
          evt.currentTarget.addEventListener(`input`, this.onInput)
        } else {
          this.$refs.input.classList.remove(`invalid`)
          evt.currentTarget.removeEventListener(`input`, this.onInput)
        }
      },
      onInput(evt) {
        if (evt.currentTarget.value.trim().length) {
          if (evt.currentTarget.checkValidity()) {
            this.$refs.input.classList.remove(`invalid`)
          } else {
            this.$refs.input.classList.add(`invalid`)
          }
        } else {
          this.$refs.input.classList.remove(`invalid`)
        }
      },
      reset() {
        const input = this.$refs.input.querySelector(`.input`)

        if (input) {
          this.$refs.input.classList.remove(`active`)
          this.$refs.input.classList.remove(`invalid`)
          input.removeEventListener(`input`, this.onInput)
        }
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

  .input {
    display: flex;
    padding: 0.75rem 1.25rem;
    border: 1px solid #cccccc;
    border-radius: 0.5rem;

    .wrapper.invalid & {
      border-color: #ff0000;
    }

    &:hover {
      border-color: #333333;
    }
  }

  .label {
    position: absolute;
    top: 0.85rem;
    left: 1.05rem;
    display: flex;
    align-items: center;
    padding: 0 0.2rem 0.2rem;
    font-size: 1rem;
    line-height: 1;
    color: #9e9e9e;
    pointer-events: none;

    .wrapper.active & {
      top: -0.35rem;
      padding: 0 0.2rem;
      font-size: 0.8rem;
      background-color: #ffffff;
    }
  }

  .error {
    position: absolute;
    opacity: 0;
  }
</style>
