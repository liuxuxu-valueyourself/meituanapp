import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.directive('document-click',{
  bind(el,binding,vnode) {
  document.addEventListener('click',binding.value,false);    
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

