<template>
  <header class="w-full bg-gray-100">
    <div class="justify-between items-center h-[50px] hidden sm:flex">
      <img
        class="w-[30px] ml-5 cursor-pointer"
        src="../assets/menu.svg"
        alt="menu hamburger"
        @click="toogleClick"
      />
    </div>
    <div class="block sm:hidden">
      <img class="p-4 mx-auto my-0 w-[200px]" src="../assets/logo-om30.png" alt="logo om30" />
      <div class="flex items-center justify-center py-2">
        <router-link :to="{ name: 'pacientes' }" class="flex items-center">
          <img class="w-[25px]" src="../assets/medical.svg" alt="icon prontuario" />
          <span class="mt-1 ml-1">Pacientes</span>
        </router-link>

        <router-link :to="{ name: 'adicionar-pacientes' }" class="flex items-center ml-5">
          <img class="w-[25px] ml-2" src="../assets/add.svg" alt="icon prontuario" />
          <span class="mt-1 ml-1">Adicionar pacientes</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  props: {
    dataOpenSidebar: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toogleClick() {
      this.$emit('clickToogle');
    },
  },
};
</script>
