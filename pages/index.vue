<template lang="pug">
  div
    h2.title Add Todo Item

    form.form(@submit.prevent='formSubmitHandler')
      .form__inputs
        BaseInput(
          v-model='name'
          id='todoName',
          name='todoName',
          :minLength="3",
          :required="true"
          ref='todoName'
        )
          span(slot='label') Name
          span(slot='error') Error
        BaseInput(
          v-model='desc'
          tag='textarea'
          id='todoDesc',
          name='todoDesc',
          :minLength="3",
          :required="true"
          ref='todoDesc'
        )
          span(slot='label') Description
          span(slot='error') Error

      button.btn.trs(type='submit') Save

    br
    br
    br

    .items
      h3 Total items: {{ items.length }}
      table(border)
        thead
          tr
            th: h4 #
            th: h4 Name
            th: h4 Description
        tbody
          tr(
            v-for='(item, i) in items'
            :key='Math.random()'
          )
            td {{ i + 1 }}
            td {{ item.name }}
            td {{ item.desc }}

      button.btn.trs(
        @click='clearBtnClickHandler'
        type='button'
      ) Clear all


</template>

<script>
  export default {
    head: () => ({ title: 'Main page' }),
    data: () => ({
      items: [],
      name: null,
      desc: null,
    }),
    mounted() {
      this.$store.dispatch(`getTodos`)
      this.items = this.$store.getters.todoItems
    },
    methods: {
      formSubmitHandler(evt) {
        const item = {
          name: this.name,
          desc: this.desc,
        }

        this.$store.dispatch(`createTodo`, item)

        evt.currentTarget.reset()

        this.$emit(`formReset`)

        this.$refs.todoName.reset()
        this.$refs.todoDesc.reset()
      },
      clearBtnClickHandler() {
        this.$store.dispatch(`clearTodos`)
        this.items = this.$store.getters.todoItems
      },
    },
  }
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
  }

  .title {
    margin-bottom: 1.5rem;
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .form__inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  .btn {
    align-self: flex-start;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    color: $white;
    border: 1px solid #cccccc;
    border-radius: 0.5rem;
    background-color: #1c8d05;

    &:hover {
      background-color: #21a108;
    }
  }

  .items {
    display: flex;
    flex-direction: column;

    h3 {
      margin-bottom: 1rem;
    }

    table {
      margin-bottom: 1rem;
    }

    th,
    td {
      text-align: center;
      border: 1px solid $black;
    }

    .btn {
      align-self: flex-start;
      background-color: #c71818;

      &:hover {
        background-color: #e22424;
      }
    }
  }
</style>
