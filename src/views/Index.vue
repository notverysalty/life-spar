<template>
  <div class="home">
    <Head />
    <NavMenu :class="navBarFixed == true ? 'navBarWrap':''" />
    <router-view></router-view>
    <Foot style="position: relative; bottom: 0;height: 270px;box-sizing: border-box;" />
  </div>
</template>

<script>
import Head from '@/layout/head'
import NavMenu from '@/layout/navMenu'
import Foot from '@/layout/foot'
export default {
  name: 'index',
  components: {
    Head,
    NavMenu,
    Foot
  },
  data () {
    return {
      navBarFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.watchScroll)
  },
  methods: {
    watchScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 640) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    // padding-bottom: 270px;
  }
  .navBarWrap {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
</style>
