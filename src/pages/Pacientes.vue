<template>
  <div class="pacientes">
    <h1 class="text-lg font-bold text-[#1C242D] text-left uppercase mt-5">Lista de pacientes</h1>
    <PacientesItem />
  </div>
</template>

<script>
import PacientesItem from '../components/PacientesItem.vue';

export default {
  name: 'Pacientes',
  components: {
    PacientesItem,
  },
};
</script>
