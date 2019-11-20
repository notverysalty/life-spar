<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background-image: url('./assets/Images/bg.jpg');
}
#app {
  height: 100%;
}
</style>
