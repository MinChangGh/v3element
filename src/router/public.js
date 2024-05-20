export  const pubRouter = [
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue'),
        hidden: true,
      }
]