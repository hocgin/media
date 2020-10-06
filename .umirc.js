// ref: https://umijs.org/config/
export default {
  history: { type: 'hash' },
  routes: [{
    path: '/',
    component: '../layouts/index',
    routes: [
      {path: '/', component: '../pages/index'},
      {path: '/music', component: '../pages/music/index'},
      {path: '/video', component: '../pages/video/index'},
      {path: '/video/detail', component: '../pages/video/detail/index'},
      {path: '/photo', component: '../pages/photo/index'}
    ]
  }],
  copy: ['CNAME'],
}
