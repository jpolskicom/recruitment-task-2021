<template>
  <div class="c-userRepos">
    <div class="c-userRepos__container">
      <a
        class="c-userRepos__row"
        :href="repo.html_url"
        target="_blank"
        v-for="(repo, key) in data"
        :key="`repo${key}`"
      >
        <div class="c-userRepos__col">
          <h2>{{ repo.name ? repo.name : "-" }}</h2>
        </div>
        <div class="c-userRepos__col">
          {{ repo.description ? repo.description : "-" }}
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
.c-userRepos {
  max-height: 60vh;
  overflow-y: scroll;
  padding: 2rem 0;
  &__container {
    border-left: 1px solid #aaa;
    padding: 1rem;
    min-height: 200px;
    h2 {
      margin: 1rem 0;
    }
  }
  &__row {
    border-bottom: 1px solid #aaa;
    text-decoration: none;
    color: #fff;
    @media (min-width: 780px) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    &:hover {
      background-color: rgb(233, 170, 54);
      color: #000;
      cursor: pointer;
    }
  }
  &__col {
    margin-right: 1rem;
    min-width: 300px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
}
</style>