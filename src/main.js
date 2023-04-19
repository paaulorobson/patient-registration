import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueTheMask from 'vue-the-mask';
import Vuelidate from 'vuelidate';
import './assets/css/app.css';

Vue.use(VueTheMask);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
