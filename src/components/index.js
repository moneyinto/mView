import Toaster from './toaster';
import Loading from './loading';
import Alert from './alert';

import Header from './header';
import Content from './content';
import Flex from './flex';

import Login from './login';

const AllCmponents = {
    Toaster,
    Loading,
    Alert
};

const mView = {
    ...Flex,
    Header,
    Content,
    Login
};

console.log(mView);

const install = (Vue, opts = {}) => {
    Object.keys(AllCmponents).forEach(key => {
        AllCmponents[key](Vue);
    });

    Object.keys(mView).forEach(key => {
        Vue.component(key, mView[key]);
    });
};

const API = {
    install
};

export default API;
