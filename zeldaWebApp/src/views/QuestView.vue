<script setup>
import QuestItemPanel from '../components/panels/QuestItemPanel.vue'
import JobSantuary from '../components/icons/IconJobSantuary.vue';
import QuestItemsList from '../components/QuestItemsList.vue';
</script>
<template>
    
    <div class="bg-[#0D152D] opacity-100" >
        <!-- NEED FUNCTIIONAL CORRECTION
            styling option overplaced on all other elements 
            mix-blend-overlay class is problématic
        
        -->
        <div class=" bg-[url('../assets/svg/bg/SheikahStateBG.svg')]
        bg-center bg-fixed bg-contain h-[500vh]"> 
        <div class=" h-screen w-full p-10 absolute 
            ">
                <QuestItemsList/>
        </div>
    
        </div>
    </div>
</template>
<style>/* 
Layer pass through 100% 
#0D152D 100%
*/
.filter-sheikah{
    background: #00FFC2;/* #2C74FF #050f2c #1d4491*/ 
    mix-blend-mode: color;
    opacity: 0.3;
}
</style>