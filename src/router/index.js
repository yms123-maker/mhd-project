import Vue from 'vue'
import VueRouter from 'vue-router'
import Classify from '../views/Classify'
import Hello from '../views/Hello'
import Favorite from '../views/Hello/Favorite'
import History from '../views/Hello/History'
import Login from '../views/Login'
import My from '../views/My'
import Ranking from '../views/Ranking'
import Register from '../views/Register'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'
import Home from '../views/Home'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/classify', component: Classify },
  {
    path: '/hello',
    component: Hello,
    children: [
      { path: 'history', component: History },
      { path: 'favorite', component: Favorite },
      { path: '', redirect: '/hello/favorite' }
    ]
  },
  { path: '/login', component: Login },
  { path: '/my', component: My },
  { path: '/ranking', component: Ranking },
  { path: '/register', component: Register },
  { path: '/search', component: Search },
  { path: '/search-result', component: SearchResult },
  { path: '/vip', component: Vip },
  { path: '/', redirect: '/home' }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})
router.afterEach((to, from) => {
  nprogress.done()
})
export default router
