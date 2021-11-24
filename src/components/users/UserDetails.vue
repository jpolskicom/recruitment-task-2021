<template>
  <div class="c-userDetails">
    <div class="c-userDetails__thumbnail" v-if="data.avatar_url">
      <img :src="data.avatar_url" :alt="data.name" />
    </div>
    <div class="c-userDetails__data">
      <h1>{{ data.name }}</h1>
      <strong v-if="data.location">City: {{ data.location }}</strong>
      <p>
        Repos:
        <strong>{{ data.public_repos ? data.public_repos : "not yet" }}</strong>
      </p>
      <p>
        Contact:
        <br />
        <a href="mailto:" v-if="data.email">email@test.pl</a>
        <br />
        <a :href="data.html_url" target="_blank" v-if="data.html_url"
          >Visit profile</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.c-userDetails {
  $t: &;
  border-radius: 0.5rem;
  border: 1px solid #aaa;
  border-top-right-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  min-height: 200px;
  @media (min-width: 780px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__data {
    padding-left: 1rem;
    width: 100%;
    h1 {
      margin: 0 0 1rem 0;
    }
    p {
      margin: 0.25rem 0;
    }
    a {
      color: #fff;
    }
  }
  &__thumbnail {
    min-width: 200px;
    min-height: 200px;
    border: 5px solid #fff;
    margin: 1rem;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      transition: transform 1s;
    }
  }
  &:hover {
    #{$t}__thumbnail {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>