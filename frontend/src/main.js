import Vue from 'vue';
import App from './App.vue';
import './assets/reset.css';
import {i18n} from './plugins/i18n';
import VueGtag from 'vue-gtag';

Vue.config.productionTip = false;

const options = {
    config: {
        id: 'UA-138589509-2'
    }
};

Vue.use(VueGtag, options);

new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app');
