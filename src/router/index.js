import Vue from 'vue'
import Router from 'vue-router'

import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'
import Home from '../components/Home'
import AssignmentIndex from "../components/assignment/AssignmentIndex"
import CourseDetailPage from "../components/assignment/CourseDetailPage";
import HyperLink from "../components/common/HyperLink";
import OpenSourBlog from "../components/common/OpenSourBlog";
import CourseNotice from "../components/assignment/CourseNotice";

Vue.use(Router)

export default new Router({
  mode: 'history',
  //base: '/login',
  routes: [
    {
      path: '*', component: Login
    },

    {
      path: '/',
      name: 'Index',
      redirect: '/index',
      component: AppIndex,
      meta: {
        //分区页面是否需要被拦截
        requireAuth: true
       }
     },

    {
      path: '/home',
      name: 'Home',
      component: Home,
      //以下为home在index不被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/assignment',
          name: 'Assignment',
          component: AssignmentIndex,
          meta: {
            requireAuth: true
          },
          children: [
            {
              path: 'coursenotice',
              name: 'CourseNotice',
              component: CourseNotice
            }
          ]
        }
      ]
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/coursedetailpage',
      name: 'CourseDetailPage',
      component: CourseDetailPage
    },

    {
      path: '/hyperlink',
      name: 'HyperLink',
      component: HyperLink,
      children: [
        {
          path: '/opensourblog',
          name: 'OpenSourBlog',
          component: OpenSourBlog
        }
      ]
    }

  ]
})

