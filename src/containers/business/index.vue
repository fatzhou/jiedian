<template>
  <div class="business-wrap">
    <router-link :to="{name:'businessForApply', params: {type: 'seller'}}"class="section seller" tag="div">
      <div class="big-sign">
        <i class="iconfont icon-shangjia"></i>
      </div>
      <p class="msg">我是商家</p>
    </router-link>
    <router-link :to="{name: 'businessForApply', params: {type: 'agent'}}" class="section agent" tag="div">
      <div class="big-sign">
        <i class="iconfont icon-3"></i>
      </div>
      <p class="msg">我是代理商</p>
    </router-link>
  </div>
</template>
<style media="screen" lang="less">
.business-wrap{
  .section{
    margin: 16px auto;
    width: 288px;
    height: 169px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0px 0px 5px 1px #ddd;
    overflow: hidden;
  }
  .big-sign{
    margin: 32px auto 16px;
    width: 72px;
    height: 72px;
    line-height: 72px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    .iconfont{
      font-size: 32px;
    }
  }
  .seller{
    .big-sign{
      background-color: #FF9800;
    }
  }
  .agent{
    .big-sign{
      background-color: #5B66D5;
    }
  }
  .msg{
    text-align: center;
    font-size: 16px;
  }
}
</style>
