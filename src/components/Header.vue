<template>
  <header class="w-full bg-gray-100">
    <div class="flex justify-between items-center h-[50px]">
      <img
        class="w-[30px] ml-5 cursor-pointer"
        src="../assets/menu.svg"
        alt="menu hamburger"
        @click="toogleClick"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  props: {
    dataOpenSidebar: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    toogleClick() {
      this.$emit('clickToogle');
    },
  },
};
</script>
