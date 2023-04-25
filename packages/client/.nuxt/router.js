import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _60007a05 = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _8e5b8c66 = () => interopDefault(import('..\\pages\\book.vue' /* webpackChunkName: "pages/book" */))
const _707660fc = () => interopDefault(import('..\\pages\\blogs\\blog1.vue' /* webpackChunkName: "pages/blogs/blog1" */))
const _705a31fa = () => interopDefault(import('..\\pages\\blogs\\blog2.vue' /* webpackChunkName: "pages/blogs/blog2" */))
const _703e02f8 = () => interopDefault(import('..\\pages\\blogs\\blog3.vue' /* webpackChunkName: "pages/blogs/blog3" */))
const _1a018ca6 = () => interopDefault(import('..\\pages\\blogs\\_id.vue' /* webpackChunkName: "pages/blogs/_id" */))
const _897959c4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blogs",
    component: _60007a05,
    name: "blogs"
  }, {
    path: "/book",
    component: _8e5b8c66,
    name: "book"
  }, {
    path: "/blogs/blog1",
    component: _707660fc,
    name: "blogs-blog1"
  }, {
    path: "/blogs/blog2",
    component: _705a31fa,
    name: "blogs-blog2"
  }, {
    path: "/blogs/blog3",
    component: _703e02f8,
    name: "blogs-blog3"
  }, {
    path: "/blogs/:id",
    component: _1a018ca6,
    name: "blogs-id"
  }, {
    path: "/",
    component: _897959c4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
