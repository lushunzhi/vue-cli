import Home from './pages/Home';
import Mine from './pages/Mine';
import Login from './pages/Login';

export default [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        component: Login
      }
    ]
  },
  {path: '/mine', component: Mine},
  {path: '/login', component: Login},
  {path: '/', component: Home}
]
