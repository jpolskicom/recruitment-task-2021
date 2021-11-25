<template>
  <div class="c-users" v-if="getUsers.length > 0">
    <UserTabs
      :items="getUsers.map((e) => e.login)"
      :selected="selectedUserKey"
      v-on:select="selectedUserKey = $event"
    />
    <template v-if="getSelectedUser">
      <UserDetails :data="getSelectedUser" />
      <UserRepos :data="getReposByOwnerLogin(getSelectedUser.login)" />
    </template>
  </div>
</template>

<script>
import UserTabs from "./UserTabs";
import UserDetails from "./UserDetails";
import UserRepos from "./UserRepos";

import { mapGetters, mapActions } from "vuex";

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
      getRepos: "repos/getRepos",
      getReposByOwnerLogin: "repos/getReposByOwnerLogin",
    }),
    getSelectedUser() {
      let user = this.getUsers[this.selectedUserKey];
      return user ? user : {};
    },
  },
  methods: {
    ...mapActions({
      fetchRepos: "repos/fetchRepos",
    }),
  },
  watch: {
    getSelectedUser: {
      handler() {
        this.fetchRepos(this.getSelectedUser.login);
      },
      deep: true,
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