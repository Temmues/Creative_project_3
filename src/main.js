import Vue from 'vue'
import App from './App.vue'
import router from './router'
import book_data from './book_data.js'

let data = {
  data: book_data
}

Vue.config.productionTip = false

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
