import Vue from 'vue'
import VueRouter from 'vue-router' ;
import App from './App.vue'
import router from "../router/router.js"
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/iconfont/iconfont.css';

Vue.use(Vant);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
