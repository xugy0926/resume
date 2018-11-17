import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

import './assets/smart-forms.css'
import './assets/smart-themes/black.css'
import './assets/smart-themes/blue.css'
import './assets/smart-themes/green.css'
import './assets/smart-themes/red.css'
import './assets/smart-themes/yellow.css'
import './assets/smart-themes/purple.css'
import './assets/font-awesome.min.css'
import './assets/template/github-markdown.css'

const themes = ['black', 'blue', 'green', 'purple', 'red', 'yellow']
window.theme = themes[Math.floor(Math.random() * themes.length)]

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  router: createRouter(),
  store: createStore(),
  render: h => h(App)
}).$mount('#app')
