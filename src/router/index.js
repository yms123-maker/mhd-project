import Vue from 'vue'
import VueRouter from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '../store'

// import Classify from '../views/Classify'
// import Hello from '../views/Hello'
// import Favorite from '../views/Hello/Favorite'
// import History from '../views/Hello/History'
// import Login from '../views/Login'
// import My from '../views/My'
// import Ranking from '../views/Ranking'
// import Register from '../views/Register'
// import Search from '../views/Search'
// import SearchResult from '../views/SearchResult'
// import Vip from '../views/Vip'
// import Home from '../views/Home'
// import City from '../views/City'
const Home = () => import('../views/Home')
const Classify = () => import('../views/Classify')
const Hello = () => import('../views/Hello')
const Favorite = () => import('../views/Hello/Favorite')
const History = () => import('../views/Hello/History')
const Login = () => import('../views/Login')
const My = () => import('../views/My')
const Ranking = () => import('../views/Ranking')
const Register = () => import('../views/Register')
const Search = () => import('../views/Search')
const SearchResult = () => import('../views/SearchResult')
const Vip = () => import('../views/Vip')
const City = () => import('../views/City')
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
  { path: '/', redirect: '/home' },
  { path: '/city', component: City }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  nprogress.start()
  if (!store.state.city.curCity && to.path !== '/city') {
    next({
      path: '/city',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  nprogress.done()
})
export default router
