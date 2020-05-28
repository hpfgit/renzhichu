<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
  import home from "./views/home";

  export default {
    name: 'App',
    components: {
      home
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
}
</style>
