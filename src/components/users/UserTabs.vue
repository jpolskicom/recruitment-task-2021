<template>
  <div class="c-userTabs">
    <transition-group name="fadeLeft" tag="div" class="c-userTabs__container">
      <div
        v-for="(item, key) in items"
        :key="`tabItem${key}`"
        class="c-userTabs__item"
        :class="{ 'c-userTabs__item--active': key == selected }"
        v-on:click="$emit('select', key)"
      >
        {{ item }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Number,
      default: () => null,
    },
  },
};
</script>

<style lang="scss">
.c-userTabs {
  max-width: 100%;
  overflow-x: auto;
  &__container {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    // flex: 1;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    background-color: rgb(133, 167, 39);
    min-width: 15%;
    color: #000;
    cursor: pointer;
    transition: background-color 0.5s;
    &:hover {
      background-color: rgb(233, 170, 54);
      border-top-right-radius: 0.5rem;
    }
    &--active {
      background-color: rgb(175, 221, 50);
    }
  }
}
</style>