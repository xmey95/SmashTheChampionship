import Vue from 'vue'
import App from './App.vue'
import fs from 'fs'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
