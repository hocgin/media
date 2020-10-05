// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  routes: [{
    path: '/',
    component: '../layouts/index',
    routes: [
      {path: '/', component: '../pages/index'},
      {path: '/music', component: '../pages/music/index'},
      {path: '/video', component: '../pages/video/index'},
      // {path: '/video/:id', component: '../pages/video/$id/index'},
      {path: '/photo', component: '../pages/photo/index'}
    ]
  }],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'media',
      dll: true,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  copy: ['CNAME'],
}
