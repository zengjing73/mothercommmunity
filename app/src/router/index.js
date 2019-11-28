import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Forum from '../views/Forum.vue'
import My from '../views/My.vue'
/* import NewPost from '../views/NewPost.vue' */

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Community',//社区
        component: () => import('../views/Community.vue'),

      }, 
      {
        path: 'forum',
        component: Forum,//圈子
        children: [
          {
            path: '',
            name: 'Recommend',
            component: () => import('../views/Recommend.vue'),
          },
          {
            path: 'followed',
            name: 'Followed',
            component: () => import('../views/Followed.vue'),
          }

        ]

      },
      {
        path: 'qanda',
        name: 'QandA',//问答
        component: () => import('../views/QandA.vue'),
      },
      {
        path: 'encyclopedia',
        name: 'Encyclopedia',//百科
        component: () => import('../views/Encyclopedia.vue'),

      },
      {
        path: 'my',//我的
        component: My,     
      },
      {
        path: 'newpost', //我的发帖
        name: 'NewPost',
        component: () => import('../views/NewPost.vue'),
        /* children: [
          {
            path: 'newpostlists',
            name: NewPostLists,
            component: () => import('../views/NewPostLists.vue')
          }
        ] */
      }, 
      {
        path: 'reply', //我的回帖
        name: 'Reply',
        component: () => import('../views/Reply.vue')
      },
      {
        path: 'collect', //我的收藏
        name: 'Collect',
        component: () => import('../views/Collect.vue')
        
      }

    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
