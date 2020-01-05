

import Vue from 'vue'

import App from './App.vue'

// import 'wind-ui/lib/components/button/index.css'
// TODO: why不行
// import win from 'wind-ui'
// const win = require('wind-ui').default
// Vue.use(win)

// 不使用的组件会被tree shaking掉
import { Button, Card } from 'wind-ui'
// Vue.use(Card)

// 不使用的时候依然导入了
// import Button from 'win/components/button/index'
Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App),
})