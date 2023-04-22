<template>
  <aside
    class="h-screen bg-[#F1E6EA] hidden sm:block"
    id="sidebar"
    :class="{ 'sidebar-visible': true, 'sidebar-close': dataOpenSidebar }"
  >
    <img class="p-4" src="../assets/logo-om30.png" alt="logo om30" v-show="!dataOpenSidebar" />
    <div class="h-[calc(100vh-50px) py-[50px]">
      <router-link
        to="/"
        :class="{
          'inline-flex relative items-center py-[10px] pl-2 w-full text-sm sm:text-lg font-medium border-gray-200 hover:bg-white hover:text-gray-800 transition duration-400 ease-in-out': true,
          'inline-flex bg-white relative items-center py-[10px] pl-2 w-full text-sm sm:text-lg font-medium border-gray-200 hover:bg-white hover:text-gray-800 transition duration-400 ease-in-out':
            $route.path === '/',
        }"
      >
        <img class="w-[25px] h-[25px] mr-2" src="../assets/medical.svg" alt="icon prontuario" />
        <span v-show="!dataOpenSidebar" class="hidden sm:block">Pacientes</span>
      </router-link>

      <router-link
        to="/adicionar-pacientes"
        :class="{
          'inline-flex relative items-center py-[10px] pl-2 w-full text-sm sm:text-lg font-medium border-gray-200 hover:bg-white hover:text-gray-800 transition duration-400 ease-in-out': true,
          'inline-flex relative bg-white items-center py-[10px] pl-2 w-full text-sm sm:text-lg font-medium border-gray-200 hover:bg-white hover:text-gray-800 transition duration-400 ease-in-out':
            $route.path === '/adicionar-pacientes',
        }"
      >
        <img class="w-[25px] h-[25px] mr-2" src="../assets/add.svg" alt="icon prontuario" />
        <span v-show="!dataOpenSidebar">Adicionar pacientes</span>
      </router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',

  props: {
    dataOpenSidebar: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
#sidebar {
  overflow: hidden;
  transition: 300ms;
}
.sidebar-visible {
  width: 300px;
}
.sidebar-close {
  width: 50px;
}
</style>
