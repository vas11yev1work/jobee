import Vue from 'vue';
import App from './App.vue';
import './assets/reset.css';
import {i18n} from './plugins/i18n';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
    id: 'UA-138589509-2',
    disabled: true,
});

new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app');
