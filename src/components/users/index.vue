<template>
  <div class="c-users">
    <UserTabs />
    <UserDetails />
    <!-- <UserRepos />  -->
  </div>
</template>

<script>
import UserTabs from "./UserTabs";
import UserDetails from "./UserDetails";
// import UserRepos from "./UserRepos";

export default {
  components: {
    UserTabs,
    UserDetails,
    // UserRepos,
  },
};
</script>

<style lang="scss">
.c-users {
  max-width: 1280px;
  width: 100%;
  margin: 1rem auto;
  padding: 2rem 2.5rem;
  background-color: rgba(0, 0, 0, 0.623);
  min-height: 480px;
  text-align: left;
}
</style>