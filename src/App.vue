<template>
  <div id="app">
    <SearchField />
  </div>
</template>

<script>
import SearchField from "./components/SearchField.vue";

export default {
  name: "App",
  components: {
    SearchField,
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
  background-color: rgb(3, 59, 85);
  font-size: 16px;
  min-height: 100vh;
}
</style>
