import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/*
 Avoid lazy loading while in dev mode
 to benefit from HMR
 */
function load (name) {
  if (process.env.NODE_ENV === 'development') {
    return require('components/' + name + '.vue')
  }
  else {
    return (resolve) => {
      require('bundle?lazy!components/' + name + '.vue')(resolve)
    }
  }
}

let routes = {
  // Not found
  '*': {
    name: '404',
    component: load('error404')
  },
  // Default
  '/': {
    name: 'rootpage',
    component: load('index')
    // subRoutes: {
    //   '/test2': {
    //     component: load('maplayout')
    //   }
    // }
  },
  '/test2': {
    name: 'rootpage',
    component: load('maplayout')
  }
}

let Router = new VueRouter({
  history: true,
  root: '/'
})

Router.map(routes)

export default Router
