<!-- 
    TODO:
        - make the border transparant 
        - make boreder for activ link
        - add incons
        

 -->
 <script setup>
 import IconHome from '../components/icons/IconHome.vue';
 import IconJobSantuary from '../components/icons/IconJobSantuary.vue';
 import IconFilmAbout from '../components/icons/IconFilmAbout.vue';
import IconMessage from '../components/icons/IconMessage.vue';
 
</script>
<template>
     <nav class="flex justify-center space-x-10 border-b-2 ">
        <RouterLink to="/"><IconHome/></RouterLink>
        <RouterLink to="/about"><IconFilmAbout/></RouterLink>
        <RouterLink to="/Quest" class=""><IconJobSantuary/></RouterLink>
        <RouterLink to="/Message" class=""><IconMessage/></RouterLink>
      </nav>
</template>