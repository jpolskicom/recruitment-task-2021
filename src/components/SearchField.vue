<template>
  <div class="c-searchField" :class="{ 'c-searchField--ready': ready }">
    <div class="c-searchField__row">Type some GitHub usernames...</div>
    <div class="c-searchField__row">
      <input
        type="text"
        v-model="inputValue"
        v-on:keyup.enter="fetchUsers()"
        class="c-searchField__input"
        autofocus
      />
      <button
        v-on:click="fetchUsers()"
        class="c-searchField__button"
        :class="{ 'c-searchField__button--active': inputValue.length > 0 }"
      >
        Zatwierdź
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      ready: false,
      inputValue: "",
    };
  },
  methods: {
    ...mapActions({
      fetchUsers: "users/fetchUsers",
    }),
    ...mapMutations({
      setUserNames: "users/setUserNames",
    }),
  },
  watch: {
    inputValue(value) {
      this.setUserNames(value);
    },
  },
  mounted() {
    // for start animation purposes only
    setTimeout(() => (this.ready = true), 10);
  },
};
</script>

<style lang="scss">
.c-searchField {
  width: 0px;
  overflow-x: hidden;
  transition: width 2s;
  &--ready {
    width: 100%;
  }
  &__row {
    width: calc(100% - 2rem);
    margin: 1rem auto;
    @media (min-width: 780px) {
      display: flex;
      justify-content: center;
      width: 480px;
    }
  }
  &__input {
    -webkit-appearance: none;
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1rem;
    border: 0;
    outline: none;
    @media (min-width: 780px) {
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }
  }
  &__button {
    padding: 1rem 2rem;
    background-color: rgb(110, 138, 32);
    font-size: 1rem;
    border: 0;
    cursor: pointer;

    @media (min-width: 780px) {
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    &--active {
      background-color: rgb(175, 221, 50);
    }
    &:hover {
      background-color: rgb(233, 170, 54);
    }
  }
}
</style>