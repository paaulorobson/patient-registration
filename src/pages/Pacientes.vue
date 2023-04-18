<template>
  <div class="pacientes">
    <h1 class="text-lg font-bold text-[#1C242D] text-left uppercase mt-5">Lista de pacientes</h1>
    <PacientesTable />
  </div>
</template>

<script>
import PacientesTable from '../components/PacientesTable.vue';

export default {
  name: 'Pacientes',
  components: {
    PacientesTable,
  },
};
</script>
