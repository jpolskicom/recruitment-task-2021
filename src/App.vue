<template>
  <div id="app">
    <SearchField />
    <Users />
  </div>
</template>

<script>
import SearchField from "./components/SearchField.vue";
import Users from "./components/users";

export default {
  name: "App",
  components: {
    SearchField,
    Users,
  },
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(3, 59, 85);
  font-size: 16px;
  min-height: 100vh;
}
/* VUE transition animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fadeLeft-enter-active,
.fadeLeft-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.fadeLeft-enter,
.fadeLeft-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
