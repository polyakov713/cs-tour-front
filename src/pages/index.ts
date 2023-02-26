export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./home'),
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('./sign-in'),
  },
]
