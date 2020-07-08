<template>
	<div>
		<van-tabbar v-model="active" :fixed="turu" active-color="#fc3d2e">
			<van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
			<van-tabbar-item icon="apps-o" to="/fenlei">分类</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" to="/gouwuche">购物车</van-tabbar-item>
			<van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name: 'footer1',
		data() {
			return {
				active: 0,
			};
		},
	};
</script>

<style>
</style>
