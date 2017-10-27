import Home from '@/components/Home'
import Learn from '@/components/Learn'
import Lab from '@/components/Lab'
import Assignments from '@/components/Assignments'

export const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '',
    component: Home,
    name: 'Home'
  },
  {
    path: '/learn',
    component: Learn,
    name: 'Learn'
  },
  {
    path: '/lab',
    component: Lab,
    name: 'Lab'
  },
  {
    path: '/assignments',
    component: Assignments,
    name: 'Assignments'
  }
]