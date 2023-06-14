<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
  

    <div class="wrapper bg-[rgba(200,200,200,0)]">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
 