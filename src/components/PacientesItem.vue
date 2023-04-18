<template>
  <div class="overflow-x-auto relative sm:rounded-lg py-5">
    <div class="w-[calc(100%-200px)] flex justify-start">
      <form class="flex items-center w-[500px]">
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
            v-model="busca"
          />
        </div>
      </form>
    </div>
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs uppercase bg-[#1C242D] text-white">
        <tr>
          <th scope="col" class="py-3 px-6">ID</th>

          <th scope="col" class="py-3 px-6">Nome do Paciente</th>

          <th scope="col" class="py-3 px-6 text-right">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:border-gray-700"
          v-for="paciente in pacientesFiltrado"
          :key="paciente.id"
        >
          <td
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap Wdark:text-white"
          >
            {{ paciente.id }}
          </td>
          <td class="py-4 px-6 text-gray-700">
            {{ paciente.name }}
          </td>
          <td class="py-4 px-6 text-right">
            <button
              class="bg-green-500 hover:bg-green-400 text-white text-xs font-bold py-2 px-2 mr-2 rounded"
              @click="getPaciente(paciente.id)"
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
              @click="deletePaciente(paciente.id)"
            >
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PacientesItem',

  data() {
    return {
      busca: '',
      pacientes: [
        {
          id: 1,
          name: 'Paulo Robson',
        },
        {
          id: 2,
          name: 'Neymar Junior',
        },
        {
          id: 3,
          name: 'Lionel Messi',
        },
        {
          id: 4,
          name: 'Cristiano Ronaldo',
        },
      ],
    };
  },

  computed: {
    pacientesFiltrado() {
      return this.pacientes.filter((item) =>
        item.name.toLowerCase().includes(this.busca.toLowerCase())
      );
    },
  },

  methods: {
    getPaciente(id) {
      console.log(`Paciente ${id}`);
    },

    editPaciente(id) {
      console.log(`Paciente ${id}`);
    },

    deletePaciente(id) {
      console.log(`Paciente ${id}`);
    },
  },
};
</script>
