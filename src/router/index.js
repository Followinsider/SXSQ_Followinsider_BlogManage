import Router from "vue-router";
import Vue from "vue";
Vue.use(Router)

export const constantRoutes = [
    {
      path: '/',
      component: () => import('@/views/Login'),
      hidden: true
    },
    
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]
  
const createRouter = () => new Router({
// mode: 'history', // require service support
scrollBehavior: () => ({ y: 0 }),
routes: constantRoutes
})

const router = createRouter()

export default router
