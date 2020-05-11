import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard.vue'

//import DashboardHome from './components/dashboard/DashboardHome.vue';

export default [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '*',
        redirect: '/',
    },
    {
        path: '/dashboard',
        component: Dashboard,
        //children: [
        //    {
        //        path: '/', component: DashboardHome
        //    },
        //]
    }
];