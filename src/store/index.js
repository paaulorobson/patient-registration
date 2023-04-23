import Vue from 'vue';
import Vuex from 'vuex';
import api from '../service/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pacientes: [],
    paciente: '',
    busca: '',
  },
  mutations: {
    SET_PACIENTES(state, payload) {
      state.pacientes = payload;
    },

    SET_PACIENTE(state, payload) {
      state.paciente = payload;
    },

    SET_BUSCA_PACIENTES(state, payload) {
      state.busca = payload;
    },

    ENVIAR_PACIENTES(state, payload) {
      state.pacientes = payload;
    },

    DELETE_PACIENTE(state, payload) {
      state.pacientes = state.pacientes.filter((paciente) => paciente.id !== payload);
    },
  },
  actions: {
    async getPacientes(context) {
      try {
        const { data } = await api.get('/pacientes');
        context.commit('SET_PACIENTES', data);
      } catch {
        this.$toast.error('Falha no servidor!');
      }
    },

    async getPacienteById(context, id) {
      try {
        const { data } = await api.get(`/pacientes/${id}`);
        context.commit('SET_PACIENTE', data);
      } catch {
        this.$toast.error('Falha no servidor!');
      }
    },

    async postPaciente(context, payload) {
      try {
        await api.post('/pacientes', payload);
      } catch {
        this.$toast.error('Falha no servidor!');
      }
    },

    async putPaciente(context, payload) {
      try {
        await api.put(`/pacientes/${payload.id}`, payload);
        context.commit('SET_PACIENTE', payload);
      } catch (error) {
        console.warn(error);
      }
    },

    async deletePacienteById(context, id) {
      try {
        await api.delete(`/pacientes/${id}`);
        context.commit('DELETE_PACIENTE', id);
      } catch (error) {
        console.warn(error);
      }
    },

    setBusca(context, payload) {
      context.commit('SET_BUSCA_PACIENTES', payload);
    },
  },
  getters: {
    pacientesFiltrados(state) {
      return state.pacientes.filter((item) =>
        item.nome.toLowerCase().includes(state.busca.toLowerCase())
      );
    },
  },
});
