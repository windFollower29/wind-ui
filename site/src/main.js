

import Vue from 'vue'

import App from './App.vue'

// commonjs module
// const win = require('wind-ui-vue').default
// import 'wind-ui-vue/lib/index.css'
// Vue.use(win)

// esModule
// import win from 'wind-ui-vue/es'
// import 'wind-ui-vue/es/index.css'
// Vue.use(win)

// 不使用的组件会被tree shaking掉
import { Button, Card } from 'wind-ui-vue'
// import { Button } from '../../wind-ui/es/components/button/index'
// import Button from '../../wind-ui/es/components/button/index'
// Vue.use(Card)

// 不使用的时候依然导入了
// import Button from 'win/components/button/index'
Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App),
})