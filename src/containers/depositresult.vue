<template>
 <div class="deposit-wrap">
    <div class="header">
      <div class="big-sign">
        <image src="http://7xpceu.com1.z0.glb.clouddn.com/TIXIAN.png" alt="" />
        <!--<i class="iconfont icon-jinbi"></i>-->
      </div>
      <div class="msg">可提现余额</div>
      <div class="amount">￥{{balance}}</div>
    </div>
    
    <div class="desc-area">
      <button class="deposit-btn" bindtap="doDeposit">提现</button>
      
      <div class="tip-title">
        <div class="border"></div>
        <div class="tip-title-word">温馨提示</div>
      </div>

      <div class="tips">
        <div class="text">1. 可提现余额是租借充电宝支付的押金和使用扣费后剩余押金的信息；</div>
        <div class="text">2. 租借充电宝过程中无法提现；</div>
        <div class="text">3. 提现申请成功后，预计0-5个工作日退回充值账号；</div>
        <div class="text">4. 如有疑问，请点击“帮助中心”了解；</div>
      </div>    
    </div>
  </div>
</template>

<script type="text/javascript">
	
</script>

<style lang="less" scoped>
/* deposit.wxss */
	.deposit-wrap {
	  background: #f4f4f4;
	  min-height: 100vh;
	}


	.header {
	    width: 100%;
	    background-color: #fff;
	    overflow: hidden;
	}

	.big-sign {
	    margin: 64rpx auto 0;
	    text-align: center;
	    width: 150rpx;
	    height: 150rpx;
	}

	.big-sign image {
	  width: 100%;
	  height: 100%;
	}

	.header .msg {
	    margin-top: 40rpx;
	    text-align: center;
	    color: #666;
	    font-size: .8em;
	    line-height: 1.75;
	}

	.header .amount {
	    margin-top: 24rpx;
	    text-align: center;
	    color: #0085EE;
	    font-size: 2em;
	    padding-bottom: 80rpx;
	}

	.desc-area {
	  background: #f4f4f4;
	  padding: 45rpx 30rpx 0;
	}

	.deposit-btn {
	  background: #0085EE;
	  color: #61b2f3;
	  margin-bottom: 20rpx;
	}

	.tip-title {
	  color: #a6a6a6;
	  position: relative;
	  text-align: center;
	}

	.tip-title .tip-title-word {
	  position:relative;
	  font-size:.8em;
	  line-height:1.75;
	  display:inline-block;
	  padding:20rpx 40rpx;
	  z-index:9999;
	  background: #f4f4f4;
	}

	.tip-title .border {
	  position: absolute;
	  bottom: 44rpx;
	  z-index: 9999;
	  width: 100%;
	  height: 1px;
	  background: #a6a6a6;
	  z-index: 1;
	}

	.tips {
	  color: #a6a6a6;
	  font-size: 24rpx;
	  line-height: 1.5;

	}

	.tips .text {
	  padding: 8rpx 0;  
	}

	
</style>