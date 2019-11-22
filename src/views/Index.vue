<template>
  <div class="home">
    <Head />
    <NavMenu />
    <router-view></router-view>
    <Foot style="position: relative; bottom: 0;height: 270px;box-sizing: border-box;" />
  </div>
</template>

<script>
import Head from '@/layout/head'
import NavMenu from '@/layout/navMenu'
import Foot from '@/layout/foot'
export default {
  name: 'home',
  components: {
    Head,
    NavMenu,
    Foot
  }
}
</script>

<style lang="scss" scoped>
  .home {
    // padding-bottom: 270px;
  }
</style>
