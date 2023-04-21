<template>
  <div class="overflow-x-auto relative sm:rounded-lg py-5">
    <div class="sm:w-[calc(100%-200px)] flex justify-start">
      <div class="text-left mx-50 my-0">
        <div class="block items-center mb-5 sm:flex">
          <img
            v-if="paciente.image"
            class="w-20 h-20 mx-auto my-0 sm:ml-5 p-1 text-center rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            :src="paciente.image"
            alt="avatar"
          />

          <img
            v-else
            class="w-20 h-20 mx-auto my-0 sm:ml-5 p-1 text-center rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="../assets/placeholder-image.jpg"
            alt="avatar"
          />
          <div class="ml-2">
            <h1 class="ml-2 text-sm sm:text-2xl mt-2 w-[200px] text-center sm:text-left">
              {{ paciente.nome }}
            </h1>
            <p class="ml-2 text-sm sm:text-base w-[200px] text-center sm:text-left">
              {{ paciente.endereco?.cidade }} - {{ paciente.endereco?.estado }}
            </p>
          </div>
        </div>
        <p class="text-base sm:text-lg">
          <span class="font-semibold">Nome da mãe:</span> {{ paciente.nomeMae }}
        </p>
        <p class="text-base sm:text-lg">
          <span class="font-semibold">Data de nascimento:</span> {{ paciente.dataNascimento }}
        </p>
        <p class="text-base sm:text-lg">
          <span class="font-semibold">CPF:</span> {{ paciente.cpf }}
        </p>
        <div>
          <h3 class="text-base sm:text-lg font-semibold">Endereço:</h3>
          <p><span class="text-sm font-semibold">CEP:</span> {{ paciente.endereco?.cep }}</p>
          <p><span class="text-sm font-semibold">Rua:</span> {{ paciente.endereco?.logradouro }}</p>
          <p><span class="text-sm font-semibold">Bairro:</span> {{ paciente.endereco?.bairro }}</p>
          <p><span class="text-sm font-semibold">Cidade:</span> {{ paciente.endereco?.cidade }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../service/api';

export default {
  name: 'Paciente',

  data() {
    return {
      paciente: '',
    };
  },

  created() {
    this.getPaciente();
  },

  methods: {
    async getPaciente() {
      const id = this.$route.params.id;
      try {
        const { data } = await api.get(`/pacientes/${id}`);
        this.paciente = data;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};
</script>
