

// const entries = require.context('./', true, /index\.js$/)
// console.log('entries', entries)

const install = (Vue) => {

}

if (typeof window != undefined && window.Vue) {
  install(Vue)
}

export default {
  install
}