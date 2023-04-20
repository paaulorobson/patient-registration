<template>
  <div class="w-full h-full flex">
    <Sidebar :dataOpenSidebar="openSidebar" />
    <div class="w-full h-full">
      <HeaderTop :dataOpenSidebar="openSidebar" @clickToogle="toogleSidebar" />
      <div class="w-full h-[calc(100vh - 50px)] px-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from './../../components/Header.vue';
import Sidebar from './../../components/Sidebar.vue';
export default {
  name: 'Layout',

  components: {
    HeaderTop,
    Sidebar,
  },

  data() {
    return {
      openSidebar: true,
    };
  },

  methods: {
    toogleSidebar() {
      this.openSidebar = !this.openSidebar;
    },
  },
};
</script>
