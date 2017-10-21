import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home"
import mime from "../components/mine"
import group from "../components/group"
import status from "../components/status"
import subject  from "../components/subject"
import Movie from '../components/movie'
import City from '../components/City'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/主页',
      name: 'home',
      component: home
    },
       {
      path: '/我的',
      name: "mime",
      component: mime
    },
          {
      path: '/小组',
      name: "group",
      component: group
    },
          {
      path: '/广播',
      name: "status",
      component: status
    },
    {
      path: '/书影音',
      name: "subject",
      component: subject,
      children:[
        {path: '', component :Movie},
        {path: 'movie', component :Movie},
        {path: 'city', component :City},
        ]
    },

  ]
})
