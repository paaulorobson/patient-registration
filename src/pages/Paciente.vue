<template>
  <div class="overflow-x-auto relative sm:rounded-lg py-5">
    <div class="w-[calc(100%-200px)] flex justify-start">
      <div class="text-left">
        <div class="flex items-center mb-5">
          <img
            class="w-20 h-20 ml-5 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="../assets/placeholder-image.jpg"
            alt="Bordered avatar"
          />
          <div class="ml-2">
            <h1 class="text-2xl ml-2">{{ paciente.nome }}</h1>
            <p class="ml-2">{{ paciente.endereco?.cidade }} - {{ paciente.endereco?.estado }}</p>
          </div>
        </div>
        <p class="text-lg">
          <span class="font-semibold">Nome da mãe:</span> {{ paciente.nomeMae }}
        </p>
        <p class="text-lg">
          <span class="font-semibold">Data de nascimento:</span> {{ paciente.dataNascimento }}
        </p>
        <p class="text-lg"><span class="font-semibold">CPF:</span> {{ paciente.cpf }}</p>
        <div>
          <h3 class="text-lg font-semibold">Endereço:</h3>
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
