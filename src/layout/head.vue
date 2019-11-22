<template>
  <header class="head">
    <div class="top">
      <div class="logo-left">
        <img src="@/assets/Images/logo.png" alt />
      </div>
      <div class="logo-right">
        <img src="@/assets/Images/logotel.png" alt />
        <span>18079116161</span>
      </div>
    </div>
    <div class="carousel">
      <el-carousel height="550px">
        <el-carousel-item v-for="item in image" :key="item">
          <img style="width: 100%; height: 100%;" src="@/assets/Images/lb2.jpg"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      image: ['@/assets/Images/lb1.jpg', '@/assets/Images/lb2.jpg']
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  .top {
    width: 60%;
    margin: 0 auto;
    height: 60px;
    padding: 15px 0;
    overflow: hidden;
    .logo-left {
      float: left;
      img {
        height: 60px;
      }
    }
    .logo-right {
      float: right;
      img {
        height: 60px;
      }
      span {
        position: absolute;
        right: 21%;
        top: 39px;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
