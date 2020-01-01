import Card from './Card'
import { createComponent } from '../../utils/create'

console.log('引入card组件')
// const c = createComponent(Card)
// console.log('c', c)
export default createComponent(Card)
// Card.install = Vue => {
//   console.log(Card.name, Card)
//   Vue.component('win-card', Card)
// }

// if (typeof window != undefined && window.Vue) {
//   component.install(Vue)
// }

// export default Card

