import Vue from 'vue'
import App from './App.vue'
import router from './router';

import '@/styles/font.css'
import '@/utils/element-ui'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
