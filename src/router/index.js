import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/home/home';
import Login from '@/pages/login/login';
import Flex from '@/pages/flex/flex';
import Toaster from '@/pages/toaster/toaster';
import Alert from '@/pages/alert/alert';
import Loading from '@/pages/loading/loading';
import Button from '@/pages/button/button';

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
        },

        {
            name: 'alert',
            path: '/alert',
            component: Alert
        },

        {
            name: 'loading',
            path: '/loading',
            component: Loading
        },

        {
            name: 'button',
            path: '/button',
            component: Button
        }
    ]
});

export default router;
