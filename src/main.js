import Vue from 'vue'
import App from './App'
import {store} from './store/store'
import router from './router'
import initial_config from "./service/data.json";
import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'


Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>',
    beforeMount() {
        this.$store.commit('mounted', initial_config)
    }
})
