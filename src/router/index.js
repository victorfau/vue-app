import Vue from 'vue'
import Router from 'vue-router'
import {store} from '../store/store'

import Template from '../components/pages/template'
import Login from '../components/admin/login'
import Admin from '../components/admin/admin'
import General_edition from '../components/admin/general_edition'

Vue.use(Router)

const Router_app = new Router({
    routes: [
        {
            path: '/admin/login',
            name: 'admin_auth',
            component: Login
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            children:[
                {
                    path: '',
                    component: General_edition,
                    name: 'admin_home',
                    meta: {
                        requiresLogin: true
                    }
                }
            ]
        },
        {
            path: '/:link',
            name: 'templated_view',
            component: Template
        }
    ],
    mode: 'history'
})

Router_app.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) &&  store.state.user.is_auth === false) {
        console.log('need redirection')
    } else {
        next()
    }
})


// todo si page pas activer mettre redirection -> home ?
export default Router_app
