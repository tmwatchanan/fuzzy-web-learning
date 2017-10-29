import Home from '@/components/Home'
import Learn from '@/components/Learn'
import Lab from '@/components/Lab'
import Assignments from '@/components/Assignments'
import HeapParadox from '@/components/HeapParadox'

export const routes = [{
    path: '*',
    redirect: '/'
  },
  {
    path: '',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Fuzzy Logic'
    }
  },
  {
    path: '/learn',
    component: Learn,
    name: 'Learn',
    meta: {
      title: 'Fuzzy Logic : Learn'
    }
  },
  {
    path: '/lab',
    component: Lab,
    name: 'Lab',
    meta: {
      title: 'Fuzzy Logic : Lab'
    }
  },
  {
    path: '/assignments',
    component: Assignments,
    name: 'Assignments',
    meta: {
      title: 'Fuzzy Logic : Assignments'
    }
  }
]
