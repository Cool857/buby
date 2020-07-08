<template>
	<div>
		<div style="line-height: 3rem;width: 100%;height: 45px;text-align: center;">
			<span style="color: #000000;">购物车</span>
			<a href="#" style="float: right;color: #000000;">编辑</a>
		</div>
		<div style="width: 100%;height: 30px;font-size: 14px;line-height: 30px;background: #EEEEEE;">
			<a style="margin: 0 10px;color: red;">满减</a>
			<a style="color: #999999;font-size:0.75rem;">满69元，已减10元</a>
			<a style="float: right;margin-right: -1.5rem;color: #999999;font-size:0.75rem;">查看活动</a>
		</div>
		<div v-if="active === 0">
			<van-card price="25.0/份" desc="规格:约600g" title="美国新奇士(Sunkist)红心橙*6个 约600g" :thumb="require('../src/assets/gwc1.jpg')">
				<template #footer>
					<van-icon name="add-o" />
				</template>
			</van-card>
			<div style="border: 1px solid #DDDDDD;width: 100%;height: 1.8rem;">
				<div>
					<span style="font-size: 14px;margin-left: 250px;">						
						<a style="font-size:0.625rem;">小计:</a>
						<a style="font-size: 0.875rem;color: red;">￥25.00</a>
					</span>
				</div>
			</div>
			<van-card price="25.0/份" desc="规格:约800g" title="法国嘎啦苹果*6个 约800g" :thumb="require('../src/assets/gwc2.jpg')">
				<template #footer>
					<van-icon name="add-o" />
				</template>
			</van-card>
			<div style="border: 1px solid #DDDDDD;width: 100%;height: 1.8rem;">
				<div>
					<span style="font-size: 14px;margin-left: 250px;">						
						<a style="font-size:0.625rem;">小计:</a>
						<a style="font-size: 0.875rem;color: red;">￥25.00</a>
					</span>
				</div>
			</div>
			<van-card price="38.0/份" desc="规格:约1500g" title="菲律宾帝王香蕉*8根 约3斤" :thumb="require('../src/assets/gwc3.jpg')">
				<template #footer>
					<van-icon name="add-o" />
				</template>
			</van-card>
			<div style="border: 1px solid #DDDDDD;width: 100%;height: 1.8rem;">
				<div>
					<span style="font-size: 14px;margin-left: 250px;">						
						<a style="font-size:0.625rem;">小计:</a>
						<a style="font-size: 0.875rem;color: red;">￥38.00</a>
					</span>
				</div>
			</div>
			<van-submit-bar :price="7800" button-text="提交订单" @submit="onSubmit" style="bottom: 3rem;">
				<van-checkbox v-model="checked">全选</van-checkbox>
				<template #tip>
					你的收货地址不支持同城送, <span @click="onClickEditAddress" style="color: #1989FA;">修改地址</span>
				</template>
			</van-submit-bar>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from './footer.vue'
	export default {
		name: 'gouwuche',
		components: {
			AppFooter
		},
		data() {
			return {
				value: '',
				active: 0,
				items: [{
						text: '今日优惠'
					},
					{
						text: '进口鲜果'
					},
					{
						text: '时令鲜果'
					},
				],
			};
		},

	};
</script>

<style>
</style>
