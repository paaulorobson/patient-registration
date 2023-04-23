<template>
  <div class="flex flex-col h-screen">
    <div class="flex-1 flex">
      <div class="h-full bg-[#F1E6EA]">
        <Sidebar :dataOpenSidebar="openSidebar" />
      </div>
      <div class="flex-1">
        <HeaderTop :dataOpenSidebar="openSidebar" @clickToogle="toogleSidebar" />

        <div class="px-10">
          <router-view></router-view>
        </div>
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
      openSidebar: false,
    };
  },

  methods: {
    toogleSidebar() {
      this.openSidebar = !this.openSidebar;
    },
  },
};
</script>
