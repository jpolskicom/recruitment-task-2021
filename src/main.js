import Vue from 'vue'
import App from './App.vue'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://api.github.com/';
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
