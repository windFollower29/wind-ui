
function createComponent (component) {
  // console.log(component)

  // component.name = 'win' + component.name

  component.install = Vue => {
    console.log('name', component.name)
    Vue.component(component.name, component)
  }

  if (typeof window != undefined && window.Vue) {
    component.install(Vue)
  }

  return component
}

export {
  createComponent
}