import Home from '@/components/Home'
import Learn from '../components/Learn'
import Lab from '@/components/Lab'
import Assignments from '@/components/Assignments'

export const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/learn',
    name: 'LearnPath',
    components: Learn
  },
  {
    path: '/lab',
    name: 'lab',
    components: Lab
  },
  {
    path: '/assignments',
    name: 'assignments',
    components: Assignments
  }
]
