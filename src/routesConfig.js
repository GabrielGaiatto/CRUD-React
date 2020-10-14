import Home from './pages/home/home';
import User from './pages/user/user';
import Login from './pages/login/login';

const routesConfig = [
    {
        path: '/', 
        component: Home,
        exact: true,

    },
    {
        path: '/user',
        component: User,
        exact:true,
    },
    {
        path: '/login',
        component: Login,
        exact:true,
    }
]

export default routesConfig;