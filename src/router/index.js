import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/home/home';
import Login from '@/pages/login/login';
import Flex from '@/pages/flex/flex';
import Toaster from '@/pages/toaster/toaster';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '',
            redirect: '/home'
        },

        {
            name: 'home',
            path: '/home',
            component: Home
        },

        {
            name: 'login',
            path: '/login',
            component: Login
        },

        {
            name: 'flex',
            path: '/flex',
            component: Flex
        },

        {
            name: 'toaster',
            path: '/toaster',
            component: Toaster
        }
    ]
});

export default router;
