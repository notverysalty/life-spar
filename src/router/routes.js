import routePath from './routerPath'
export default [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  }, {
    path: '/',
    component: routePath.index,
    redirect: { name: 'home' },
    children: [{
      path: '/home',
      name: 'home',
      component: routePath.home
    }]
  }
]
