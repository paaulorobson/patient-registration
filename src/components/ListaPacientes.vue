<template>
  <div class="overflow-x-auto relative sm:rounded-lg py-5">
    <div class="w-[calc(100%-200px)] flex justify-start">
      <form class="flex items-center w-[500px] sm:w-[500px]">
        <label for="voice-search" class="sr-only">Search</label>
        <div class="relative w-full mb-5">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-auto text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6
                0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class="block w-full rounded-md pl-10 p-2.5 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            placeholder="Search..."
            required
            v-model="searchQuery"
          />
        </div>
      </form>
    </div>
    <table
      v-if="pacientes.lenght !== 0"
      class="w-full text-left text-gray-500 dark:text-gray-400 overflow-x-auto sm:overflow-x-none"
    >
      <thead class="text-xs uppercase bg-[#1C242D] text-white">
        <tr>
          <th scope="col" class="py-3 px-6">ID</th>

          <th scope="col" class="py-3 px-6">Avatar</th>

          <th scope="col" class="py-3 px-6">Nome do Paciente</th>

          <th scope="col" class="py-3 px-6 text-right">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:border-gray-700"
          v-for="paciente in pacientesFiltrados"
          :key="paciente.id"
        >
          <td
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap Wdark:text-white"
          >
            {{ paciente.id }}
          </td>

          <td
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap Wdark:text-white"
          >
            <img
              :src="paciente.image ? paciente.image : '../assets/placeholder-image.jpg'"
              alt="avatar"
              class="w-10 h-10 rounded-full"
              v-if="paciente.image"
            />

            <img
              v-else
              src="../assets/placeholder-image.jpg"
              alt="avatar"
              class="w-10 rounded-full"
            />
          </td>

          <td class="py-4 px-6 text-gray-700">
            {{ paciente.nome }}
          </td>
          <td class="py-4 px-6 text-right flex sm:block">
            <button
              class="bg-green-500 hover:bg-green-400 text-white text-xs font-bold py-2 px-2 mr-2 rounded"
              @click="getPacienteById(paciente.id)"
            >
              Visualizar
            </button>

            <button
              class="bg-blue-500 hover:bg-blue-400 text-white text-xs font-bold py-2 px-2 mr-2 rounded"
              @click="editPaciente(paciente.id)"
            >
              Editar
            </button>

            <button
              class="bg-red-500 hover:bg-red-400 text-white text-xs font-bold py-2 px-2 rounded"
              @click="selectedPaciente(paciente.id)"
            >
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="flex flex-col justify-center align-center mt-10">
      <img src="../assets/empty.svg" alt="planilha vazia" class="w-28 my-0 mx-auto mb-5" />
      <p class="text-sm font-bold uppercase">Não possui pacientes!</p>
    </div>
    <ModalConfirma
      :paciente="pacientes"
      :openModal="showModal"
      @delete="deletePaciente"
      @close="showModalConfirma"
    />
  </div>
</template>

<script>
import ModalConfirma from './ModalConfirma.vue';
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: 'ListaPacientes',

  components: {
    ModalConfirma,
  },

  data() {
    return {
      pacienteSelecionado: null,
      showModal: false,
      searchQuery: '',
    };
  },

  watch: {
    searchQuery(newValue) {
      this.setBusca(newValue);
    },
  },

  created() {
    this.getPacientes();
  },

  computed: {
    ...mapState(['pacientes', 'busca']),
    ...mapGetters(['pacientesFiltrados']),
  },

  methods: {
    ...mapActions(['getPacientes', 'setBusca', 'deletePacienteById']),

    getPacienteById(id) {
      this.$router.push({ name: 'paciente', params: { id: id } });
    },

    editPaciente(id) {
      this.$router.push({ name: 'adicionar-pacientes', params: { id: id } });
    },

    selectedPaciente(id) {
      this.pacienteSelecionado = id;
      this.showModalConfirma();
    },

    showModalConfirma() {
      this.showModal = !this.showModal;
    },

    deletePaciente() {
      this.deletePacienteById(this.pacienteSelecionado);
      this.$toast.success('Paciente deletado com sucesso!');
      this.showModal = false;
    },
  },
};
</script>
