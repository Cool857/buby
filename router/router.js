import Vue from "vue";
import VueRouter from "vue-router";
import fenlei from "../views/fenlei.vue";
import my from "../views/my.vue";
import footer from "../views/footer.vue";
import footer1 from "../views/footer1.vue";
import footer2 from "../views/footer2.vue";
import gouwuche from "../views/gouwuche.vue";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
	{
		path:"/",
		component:index
	},
	{
		path:"/fenlei",
		component:fenlei
	},
	{
		path:"/my",
		component:my
	},
	{
		path:"/footer",
		component:footer
	},
	{
		path:"/footer1",
		component:footer1
	},
	{
		path:"/footer2",
		component:footer2
	},
	{
		path:"/gouwuche",
		component:gouwuche
	},
	{
		path:"/index",
		component:index
	},
]

var router = new VueRouter({
	routes
})
export default router;