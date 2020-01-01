

import Vue from 'vue'

import App from './App.vue'

// import 'win/components/button/index.css'
// import win from '../../node_modules/win'
// TODO: why不行
// import win from 'win'
// Vue.use(win)

// 不使用的组件会被tree shaking掉
import { Button, Card } from 'win'
// Vue.use(Card)

// 不使用的时候依然导入了
// import Button from 'win/components/button/index'
Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App),
})