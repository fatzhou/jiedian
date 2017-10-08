<template>
	<div class="deposit-result">
		<div class="top-tips">
			<img class="top-tips-bg" src="http://7xpceu.com1.z0.glb.clouddn.com/deposit_bg.png" />
			<div class="amount">￥{{amount}}</div>
			<p class="tip-first">提现申请已提交</p>
			<p class="tip-second">预计0-5个工作日退回充值账号</p>
		</div>
		<div class="deposit-order">提现单号：{{orderno}}</div>
		<div class="deposit-result-area">
			<img class="image-area" src="http://7xpceu.com1.z0.glb.clouddn.com/process.png" class="image-area">
			<div class="word-area">
				<div class="word-process">
					<div class="word-process-first active">提交成功{{amount}}元</div>
					<div class="word-process-second">{{time}}</div>
				</div>			
				<div class="word-process">
					<div class="word-process-first active">处理中</div>
					<div class="word-process-second">预计0-5个工作日退回充值账号</div>
				</div>			
				<div class="word-process">
					<div class="word-process-first">提现成功</div>
					<div class="word-process-second">申请提现成功，请去交易明细查看</div>
				</div>
			</div>
		</div>
		<div class="button-area">
			<div class="deposit-button" @click="goback">完成</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import { modifyTitle } from 'utils'

	export default {
		name: 'depositresult',
		data() {
			return {
				amount: '0.00',
				orderno: 'UKeww9239jjdsj',
				time: '2017年1月1日 17:12:10'
			}
		},
		created() {
			modifyTitle('提现成功');
			if(this.$route.parans) {
				this.amount = this.$route.params.amount
				this.orderno = this.$route.params.orderno		
				this.time = this.$route.params.time		
			}
		},
		methods: {
			goback() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="less" scoped>
.top-tips {
	position: relative;
	height: 169px;
}

.top-tips-bg {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 1;
	top: 0;
	left: 0;
}

.amount {
	line-height: 45px;
	font-size: 32px;
	color: #0085EE;
	top: 40px;
	width: 100%;
	text-align: center;
	position: absolute;
	z-index: 10;
}

.tip-first {
	font-size: 14px;
	line-height: 20px;
	color: #212121;
	top: 88px;
	width: 100%;
	text-align: center;
	position: absolute;
	z-index: 10;
}

.tip-second {
	font-size: 10px;
	line-height: 2.25;
	top: 108px;
	position: absolute;
	width: 100%;
	text-align: center;
	z-index: 10;
	color: #999;
}

.deposit-order {
	font-size: 12px;
	color: #616161;
	margin: 0 15px;
	line-height: 40px;
	height: 40px;
	border-bottom: 1rpx solid #ececec;
}

/* 提现详情 */
    .deposit-result-area {
        overflow: hidden;
        margin: 0 22px;
        padding-top: 10px;
        border-bottom: 1px solid #ececec;

        .image-area {
            float: left;
            width: 15px;
            height: 127px;
        }

        .word-area {
            float: left;
            margin-left: 10px;
            margin-top: -4px;
        }
    }


    .word-process {
        padding-bottom: 18px;
        &:last-child {
            padding-bottom: 10px;
        }
    }

    .word-process-first {
        color: #212121;
        font-size: 12px;
        line-height: 21px;
        height: 21px;
    }

    .active {
        color: #0085ee;
    }

    .word-process-second {
        font-size: 10px;
        height: 16px;
        line-height: 16px;
        color: #616161;
    }

    /* 提现详情结束 */


.deposit-button {
	background: #0085EE;
	color: #fff;
	border-radius: 4px;
	font-size: 16px;
	margin: 0 15px;
	height: 44px;
	line-height: 44px;
	text-align: center;
	margin-top: 10px;
}
	
</style>