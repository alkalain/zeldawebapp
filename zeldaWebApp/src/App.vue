<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavView from './views/NavView.vue';
import HeaderMain from './components/HeaderMain.vue';
</script>

<template>
  <header class="bg-[#050f2c] text-white">
    

    <HeaderMain/>
    <div class="wrapper bg-[rgba(200,200,200,0)]">

      <NavView/>
    </div>
  </header>

  <RouterView />

  <footer class="bg-[#050f2c] text-white">

  </footer>
</template>
 