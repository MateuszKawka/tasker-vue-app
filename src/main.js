import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import storeConfig from './store/store-config'
import './registerServiceWorker'
Vue.use(Vuex)

const store = new Vuex.Store(storeConfig)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')