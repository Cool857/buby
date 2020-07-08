<template>
	<div>
		<div class="fenlei" style="position: fixed; top: 0rem;">
			<van-search v-model="value" show-action placeholder="搜索商品" @search="onSearch">
				<template #action>
					<div @click="onSearch">
						<van-icon name="filter-o" />
					</div>
				</template>
			</van-search>
		</div>
		<div>
			<van-tree-select height="40rem" :items="items" :main-active-index.sync="active">
				<template #content>
					<div v-if="active === 0">
						<van-card price="34.00/份" desc="酸酸甜甜根本停不下来!" title="海南陵水圣女果 2斤装" :thumb="require('../src/assets/fenlei1.jpg')">
							<template #footer>
								<van-icon name="add-o"></van-icon>
							</template>
						</van-card>
						<van-card price="80.00/份" desc="再吃等1一年!蜜一样的甜滋味!" title="黄金车厘子 约500g" :thumb="require('../src/assets/fenlei2.jpg')">
							<template #footer>
								<van-icon name="add-o"></van-icon>
							</template>
						</van-card>
						<van-card price="29.00/份" desc="水分超多,浓甜可口" title="江西赣南脐橙*3 约500g" :thumb="require('../src/assets/fenlei3.jpg')">
							<template #footer>
								<van-icon name="add-o"></van-icon>
							</template>
						</van-card>
					</div>
					<div v-if="active === 0">
						<van-card price="56.00/份" desc="不亚于水蜜桃的高颜值冬桃!" title="澳大利亚油桃*6 约800g" :thumb="require('../src/assets/fenlei4.jpg')">
							<template #footer>
								<van-icon name="add-o"></van-icon>
							</template>
						</van-card>
					</div>
					<div v-if="active === 0">
						<van-card price="12.5/份" desc="细嫩可口" title="湖南麻阳冰糖橙*6 约500g" :thumb="require('../src/assets/fenlei5.jpg')">
							<template #footer>
								<van-icon name="add-o"></van-icon>
							</template>
						</van-card>
					</div>
					<div v-if="active === 0">
						<van-card price="25.00/份" desc="清脆可口,真的有奶香味" title="台湾牛奶蜜枣*6 约2斤" :thumb="require('../src/assets/fenlei6.jpg')">
							<template #footer>
								<van-icon name="add-o"></van-icon>
							</template>
						</van-card>
					</div>
				</template>
			</van-tree-select>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from './footer.vue'
	export default {
		name: 'fenlei',
		components: {
			AppFooter
		},
		data() {
			return {
				value: '',
				active: 0,
				items: [{
						text: '今日优惠',
					},
					{
						text: '进口鲜果',
					},
					{
						text: '时令鲜果',
					},
					{
						text: '今日鲜果',
					},
					{
						text: '车厘子',
					},
					{
						text: '柑橘橙柚',
					},
					{
						text: '奇异果/猕猴桃',
					},
					{
						text: '草莓/蓝莓',
					},
					{
						text: '葡萄/提子',
					},
					{
						text: '桃杏李',
					},
					{
						text: '苹果/梨',
					},
					{
						text: '瓜类',
					},
					{
						text: '果干/零食',
					},
				],
			};
		},
	};
</script>

<style>

</style>
