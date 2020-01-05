

// const entries = require.context('./', true, /index\.js$/)
// console.log('entries', entries)

import Button from './components/button/index'
import './components/button/index.scss'

import Card from './components/card/index'
import './components/card/index.scss'

const install = (Vue) => {
  Vue.use(Button)
  Vue.use(Card)
}

if (typeof window != undefined && window.Vue) {
  install(Vue)
}

export {
  Button,
  Card
}

export default {
  install
}