<template>
	<div>
		<div style="width: 90%;margin: 0 auto;">
			<van-icon name="location-o" style="position: fixed;top: 1.21rem; left: 0px;" />
			<van-search v-model="value" show-action label="" placeholder="车厘子" @search="onSearch">
				<template #action>
					<div @click="onSearch">
						<van-icon name="filter-o" />
					</div>
				</template>
			</van-search>
		</div>
		<div style="width: 90%;height: 100%;margin: 0 auto;">
			<img src="../src/assets/index.png" style="width: 100%;height: 180px;border-bottom-right-radius: 10px;border-bottom-left-radius: 10px;border-top-right-radius: 10px;border-top-left-radius: 10px;" />
		</div>
		<div class="zhuanti" style="width: 90%;height: 80px;margin: 0 auto; margin-top: 10px;">
			<div style="width: 50%;height: 100%;background: red;border-radius: 5px;float: left;">
				<div style="margin-top: 10px;">
					<a style="font-size: 1rem;margin-left: 48px;">专题预售</a>
				</div>
				<ul>
					<li><a>带来偏远地区的原生鲜果</a></li>
					<li><a>送去一份份温暖的爱心</a></li>
				</ul>
			</div>
			<div style="width: 20%;height: 100%;background:#EE9900; float: left;margin-left: 11.3rem;margin-top: -5rem;border-radius: 5px;">
				<div style="margin-top: 10px;text-align: center;">
					<a style="font-size: 1rem;">邀请好友</a>
				</div>
				<ul>
					<li><a>30元红包</a></li>
					<li><a>等你拿</a></li>
				</ul>
			</div>
			<div style="width: 23%;height: 100%;background:yellow; float: right; margin-top: -5rem;border-radius: 5px;">
				<div style="margin-top: 10px; text-align: center;">
					<a style="font-size: 1rem;">扶贫助困</a>
				</div>
				<ul>
					<li><a>带来自然鲜果</a></li>
					<li><a>送去温暖爱心</a></li>
				</ul>
			</div>
			<div class="kuaibao">
				<div style="width: 4rem;">
					<h4>鲜果快报</h4>
				</div>
				<div style="width: 15rem; margin-left: 5rem; margin-top: -2.5rem; border: 1px solid #969896; border-radius: 0.3125rem;">
					<a style="color: #DF5000; margin-left: 0.1875rem;">每日</a>
					|<a style="color: #969896;">今年的沙糖桔，为何这般清甜!</a>
				</div>
			</div>
			<div class="yusho">
				<div class="pt">
					<h4 style="color: #404040; margin-top: 0.2rem;">拼团预售</h4>
					<a style="float: right; margin-top: -2.4rem;color: #969896; ">产地直采·品质保证</a>
				</div>
				<div class="rm">
					<van-card price="30.0/份" title="甘肃静宁苹果*6 约2斤" :thumb="require('../src/assets/index-pg.jpg')" />
				</div>
			</div>
		</div>


		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from './footer.vue'
	export default {
		name: 'index',
		components: {
			AppFooter
		},
		data() {
			return {
				active: 0,
			};
		},

	};
</script>

<style>
	ul,
	li {
		text-align: center;
	}

	a {
		text-align: center;
	}

	.zhuanti p {
		color: #FFFFFF;
		text-align: center;
		margin-top: 0.625rem;
	}

	.zhuanti a {
		font-size: 0.75rem;
		color: #FFFFFF;
		margin-top: 0.625rem;
	}

	.yaoqing {
		width: 20%;
		/* background: #EE9900; */
	}

	.kuaibao {
		position: fixed;
		width: 90%;
		height: 6.25rem;
		color: red;
		top: 20rem;
	}

	.yusho {
		width: 90%;
		height: 100rem;
		position: fixed;
		/* background: #EE9900; */
		top: 25rem;
	}

	.pt {
		width: 90%;
		height: 1.875rem;
		/* background: brown; */
		position: fixed;
		top: 25rem;
	}

	.rm {
		width: 90%;
		height: 6.25rem;
		border: 1px solid #969896;
		margin: 50px 15px;
	}

	.yh {
		width: 90%;
		height: 18rem;
		position: fixed;
		/* background: #EE9900; */
		top: 50rem;
	}
</style>
