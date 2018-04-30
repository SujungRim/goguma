import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/HomeContainer'
import SoptContainer from '@/components/SoptContainer'
import NoticeContainer from '@/components/NoticeContainer'
import StoryContainer from '@/components/StoryContainer'
import InformationContainer from '@/components/InformationContainer'
import RecruitContainer from '@/components/RecruitContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeContainer
    },
    {
      path: '/home',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/sopt',
      name: 'SoptContainer',
      component: SoptContainer
    },
    {
      path: '/notice',
      name: 'NoticeContainer',
      component: NoticeContainer
    },
    {
      path: '/story',
      name: 'StoryContainer',
      component: StoryContainer
    },
    {
      path: '/information',
      name: 'InformationContainer',
      component: InformationContainer
    },
    {
      path: '/recruit',
      name: 'RecruitContainer',
      component: RecruitContainer
    }
  ]
})
