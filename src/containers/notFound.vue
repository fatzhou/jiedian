<template>
  <div class="not-found-wrap">
    <div class="img-wrap">
      <img class="img" src="../assets/not-found.png" alt="">
    </div>
    <p class="text">服务器开小差了，请稍候再试</p>
  </div>
</template>
<style lang="less">
.not-found-wrap{
  .img-wrap{
    margin: 60px auto 0;
    width: 120px;
    height: 174px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .text{
    margin-top: 30px;
    text-align: center;
    font-size: 16rpx;
  }
}
</style>
