<template>
  <div class="nav">
    <el-menu
      default-active="1"
      active-text-color="#1C5127"
      class="el-menu-demo navMenu"
      mode="horizontal"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">陵园墓地</el-menu-item>
      <el-menu-item index="3">生命晶石</el-menu-item>
      <el-menu-item index="4">周边产品</el-menu-item>
      <el-menu-item index="5">族谱</el-menu-item>
      <el-menu-item index="6">新闻资讯</el-menu-item>
      <el-menu-item index="7">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  background-color: #fff;
  .navMenu {
    margin: auto;
    box-sizing: border-box;
    border-bottom: none;
    width: 1200px;
  }
}
</style>
