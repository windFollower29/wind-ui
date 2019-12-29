

import Vue from 'vue'

import App from './App.vue'

// import Win from '../../dist/components/index'

const cDir = '../../lib/components'

const entries = require.context('../../lib/components', true, /index\.js$/)

// debugger
// entries.keys().forEach((e) => {
//   const c = require(cDir + e.replace(/\./, '')).default
//   console.log('./' + cDir + e.replace(/\./, ''))
//   // import('./' + cDir + e.replace(/\./, ''))
//   //   .then(res => {
//   //     console.log(res)
//   //   })
//   // Vue.component(c.name, c)
// })
// console.log('entries', entries)

// import Button from '../../lib/components/button/index.js'
// import Card from '../../lib/components/card/index.js'
const Button = require('../../lib/components/button/index.js').default
const Card = require('../../lib/components/card/index.js').default
// window.Card = Card
// console.log('Card', Card)
// Vue.component(Card.name, Card)
// Vue.component('win-button', Button)
// Vue.use(Button)
// Vue.use(Card)
window.Vue = Vue
import Win from '../../lib/components/index'
Vue.use(Win)

window.addEventListener('load', () => {
  console.log('loaded')
}, false)

new Vue({
  el: '#app',
  render: h => h(App),
})