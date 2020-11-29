import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _37203615 = () => interopDefault(import('..\\resources\\pages\\dessert.vue' /* webpackChunkName: "pages/dessert" */))
const _514eb3c9 = () => interopDefault(import('..\\resources\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _fd2ad0fe = () => interopDefault(import('..\\resources\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dessert",
    component: _37203615,
    name: "dessert"
  }, {
    path: "/inspire",
    component: _514eb3c9,
    name: "inspire"
  }, {
    path: "/",
    component: _fd2ad0fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
