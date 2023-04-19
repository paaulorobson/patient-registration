<template>
  <div class="w-screen h-screen flex overflow-x-hidden">
    <div class="w-[400px] h-screen bg-gray-200">
      <img class="p-4" src="../assets/logo-om30.png" alt="logo om30" />

      <div class="h-[calc(100vh-50px) py-[20px]">
        <router-link
          to="/"
          class="inline-flex relative items-center py-[10px] pl-2 w-full text-lg font-medium border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
        >
          <img
            class="w-[25px] h-[25px] mr-2"
            src="../assets/medical-chart.svg"
            alt="icon prontuario"
          />
          Pacientes
        </router-link>

        <router-link
          to="/adicionar-pacientes"
          class="inline-flex relative items-center py-[10px] pl-2 w-full text-lg font-medium border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
        >
          <img class="w-[25px] h-[25px] mr-2" src="../assets/add.svg" alt="icon prontuario" />
          Adicionar pacientes
        </router-link>
      </div>
    </div>

    <div class="w-full h-full bg-gray-50 p-[20px]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>
