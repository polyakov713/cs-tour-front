export const routes = [
  {
    path: '/',
    component: () => import('./home'),
  },
  {
    path: '/sign-in',
    component: () => import('./sign-in'),
  },
]
