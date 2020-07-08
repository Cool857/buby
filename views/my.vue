<template>
	<div class="my">


		<div style="position:fixed ;top: 3.5rem;width: 98%;margin: 0 auto;">
			<div style="width: 95%;height: 100px;">
				<img src="../../../buby/src/assets/login.jpg" style="width: 60px;height: 60px;margin-top:5px;" />
				<a style="position: fixed; font-size: 18px;line-height: 5rem;">鲜果小王子</a>
				<van-icon class-prefix="my-icon" name="qrcode1" slot="icon" style="float: right;position: fixed; top: 5.4rem; left: 20.5rem;" />
			</div>
			<div style="text-align: center;">
				<van-row>
					<van-col span="8">200</van-col>
					<van-col span="8">5</van-col>
					<van-col span="8">1500</van-col>
				</van-row>
				<van-row>
					<van-col span="8">账户余额</van-col>
					<van-col span="8">优惠券</van-col>
					<van-col span="8">账户积分</van-col>
				</van-row>
			</div>
		</div>
		<div class="fahuo">
			<van-tabbar v-model="active1" :fixed="false" style="position: fixed;bottom: 25rem;size:15px;" active-color="#5d5d5d">
				<van-tabbar-item icon="balance-list">待支付
					<van-icon class-prefix="my-icon" name="daifukuan" slot="icon" />
				</van-tabbar-item>
				<van-tabbar-item icon="search">待配送
					<van-icon class-prefix="my-icon" name="daifahuo" slot="icon" />
				</van-tabbar-item>
				<van-tabbar-item icon="friends-o">配送中
					<van-icon class-prefix="my-icon" name="daishouhuo" slot="icon" />
				</van-tabbar-item>
				<van-tabbar-item icon="search">待评价
					<van-icon class-prefix="my-icon" name="daipingjia" slot="icon" />
				</van-tabbar-item>
				<van-tabbar-item icon="column">全部订单
					<van-icon class-prefix="my-icon" name="rizhi" slot="icon" />
				</van-tabbar-item>
			</van-tabbar>
		</div>
		<div style="position: fixed;bottom: 5rem;">
			<div class="a" style="text-align: left;">
				<van-cell title="我的收藏" icon="like" />
			</div>
			<div class="b" style="text-align: left;">
				<van-cell title="优惠福利" icon="point-gift" />
			</div>
			<div class="c" style="text-align: left;">
				<van-cell title="会员中心" icon="gem" />
			</div>
			<div class="abcd" style="text-align: left;">
				<van-cell title="地址管理" icon="location" />
				<van-cell title="门店/自提点查询" icon="shop" />
				<van-cell title="客服帮助" icon="service" />
				<van-cell title="设置" icon="setting" />
			</div>
		</div>
		<div>
			<van-tabbar v-model="active" active-color="#fc3d2e">
				<van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
				<van-tabbar-item icon="apps-o" to="/fenlei">分类</van-tabbar-item>
				<van-tabbar-item icon="shopping-cart-o" to="/gouwuche">购物车</van-tabbar-item>
				<van-tabbar-item icon="contact">我的</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'my',
		data() {
			return {
				active: 0,
				active1: 0,
			};
		},
	};
</script>

<style>
	.abcd .van-cell__left-icon {
		color: #1989FA;
	}

	.a .van-cell__left-icon {
		color: #EE0A24;
	}

	.b .van-cell__left-icon {
		color: #F56723;
	}

	.c .van-cell__left-icon {
		color: #FFD01E;
	}

	.fahuo {
		color: #EE0A24;
	}
</style>
