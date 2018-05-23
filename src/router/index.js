import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import HomeClients from '@/components/Home/Clients'
import HomeAbout from '@/components/Home/About'
import HomeAutoAccident from '@/components/Home/AutoAccident'
import HomeSemiTruck from '@/components/Home/SemiTruck'
import HomePraticeArea from '@/components/Home/PraticeArea'
import HomeContact from '@/components/Home/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/home'
      // children: [
      //   {
      //     path: 'happy-clients',
      //     name: 'Our Happy Client',
      //     component: HomeClients
      //   },
      //   {
      //     path: '/contact',
      //     name: 'Contact',
      //     component: HomeContact
      //   }
      // ]
    },
    {
      path: '/clients',
      name: 'Our Happy Clients',
      component: HomeClients
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: HomeAbout
    },
    {
      path: '/auto-accident',
      name: 'Automobile Accidents',
      component: HomeAutoAccident
    },
    {
      path: '/semi-truck',
      name: 'Semi-truck Accidents',
      component: HomeSemiTruck
    },
    {
      path: '/pratice-area',
      name: 'Other Practice Areas',
      component: HomePraticeArea
    },
    {
      path: '/contact',
      name: 'Contact Us',
      component: HomeContact
    }
  ]
})
