<template>
  <div class="card">
    <header class="head">
      <h3 class="left">{{title}}</h3>
      <el-button type="text" class="right">{{btnName + ' >>'}}</el-button>
    </header>
    <div class="body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    btnName: {
      type: String,
      default: '查看更多'
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    overflow: hidden;
    padding: 10px;
    .head {
      height: 40px;
      padding: 0 20px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
      .left {
        float: left;
        margin: 0;
      }
      .right {
        float: right;
      }
    }
  }
</style>
