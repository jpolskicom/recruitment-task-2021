<template>
  <div class="c-users" v-if="getUsers.length > 0">
    <UserTabs
      :items="getUsers.map((e) => e.login)"
      :selected="selectedUserKey"
      v-on:select="selectedUserKey = $event"
    />
    <UserDetails :data="getSelectedUser" />
    <UserRepos />
  </div>
</template>

<script>
import UserTabs from "./UserTabs";
import UserDetails from "./UserDetails";
import UserRepos from "./UserRepos";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedUserKey: 0,
    };
  },
  components: {
    UserTabs,
    UserDetails,
    UserRepos,
  },
  computed: {
    ...mapGetters({
      getUsers: "users/getUsers",
    }),
    getSelectedUser() {
      let user = this.getUsers[this.selectedUserKey];
      return user ? user : null;
    },
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