import Vue from 'vue';
import VueRouter from 'vue-router';
import Pacientes from '../pages/Pacientes.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'pacientes',
    component: Pacientes,
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
  {
    path: '/paciente/:id',
    name: 'paciente',
    component: () => import(/* webpackChunkName: "Paciente" */ '../pages/Paciente.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
