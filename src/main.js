import App from './App.vue'
import Vue from 'vue'



new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.config.productionTip = false;
Vue.config.devtools = false;


