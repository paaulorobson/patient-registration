import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'pacientes',
    component: () => import(/* webpackChunkName: "Pacientes" */ '../pages/Pacientes.vue'),
  },
  {
    path: '/adicionar-pacientes',
    name: 'adicionar-pacientes',
    component: () =>
      import(
        /* webpackChunkName: "AdicionarPacientes"
         */ '../pages/AdicionarPacientes.vue'
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
