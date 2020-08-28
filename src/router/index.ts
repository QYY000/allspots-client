import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Explore from '../views/Explore.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Explore',
    component: Explore,
    meta: {
      title: 'Explore'
    }
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue'),
    meta: {
      title: 'Sign in'
    }
  },
  {
    path: '/add',
    name: 'AddYours',
    component: () => import('../views/AddYours.vue'),
    meta: {
      title: 'Add yours'
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
    meta: {
      title: 'Sign up'
    }
  },
  {
    path: '/spot/:slug',
    name: 'Spot',
    component: () => import('../views/Spot.vue'),
    meta: {
      title: 'Spot'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes
})

const DEFAULT_TITLE = 'AllSpots'
router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = `${to.meta.title} — ${DEFAULT_TITLE}`
  })
})

export default router
