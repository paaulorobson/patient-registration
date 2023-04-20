<template>
  <div class="pacientes">
    <h1 class="text-lg font-bold text-[#1C242D] text-left uppercase mt-5">Lista de pacientes</h1>
    <ListaPacientes />
  </div>
</template>

<script>
import ListaPacientes from '../components/ListaPacientes.vue';

export default {
  name: 'Pacientes',
  components: {
    ListaPacientes,
  },
};
</script>
