// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import './style/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => {
    return h(App)
  }
  // components: { App },
  // template: '<App/>'
})

