<template>
  <footer class="foot">
    <ul class="ewm">
      <li class="left">
        <div>
          <h3>官方微信公众号</h3>
          <p>扫描二维码，关注官方微信，殡葬习俗讲究不用愁！</p>
        </div>
        <img src="@/assets/Images/ewm.jpg" alt />
      </li>
      <li class="right">
        <img src="@/assets/Images/fottel.png" alt />
        <div>
          <h2>18079116161</h2>
          <p>拨打服务热线咨询详情</p>
        </div>
      </li>
    </ul>
    <p class="copyrigh">
      Copyright © 2019 国众网络科技有限公司 All Right Reserved.
      <a href="http://www.beian.miit.gov.cn" target="_blank" style="color: #ccc;text-decoration: none;">京ICP备19043871号-1</a>
    </p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .foot {
    background-image: url('../assets/Images/fotbg.jpg');
    padding-bottom: 25px;
    width: 100%;
    .ewm {
      padding: 50px 0 30px 0;
      width: 1200px;
      margin: 0 auto;
      list-style: none;
      overflow: hidden;
      border-bottom: 1px solid #fff;
      .left {
        float: left;
        width: 49%;
        overflow: hidden;
        border-right: 1px solid #fff;
        >div {
          float: right;
          width: 230px;
          padding: 0 30px;
          color: #fff;
          >h3 {
            margin: 10px;
          }
        }
        >img {
          float: right;
          border-radius: 15px;
          height: 100px;
        }
      }
      .right {
        float: left;
        width: 48%;
        overflow: hidden;
        padding-left: 30px;
        >div {
          float: left;
          width: 230px;
          padding: 0 20px;
          color: #fff;
          h2 {
            margin-bottom: 10px;
          }
        }
        >img {
          float: left;
          margin-top: 10px;
          height: 80px;
          width: 80px;
        }
      }
    }
     .copyrigh {
        font-size: 14px;
        color: #fff;
        text-align: center;
      }
  }
</style>
