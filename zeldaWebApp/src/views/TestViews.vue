<script setup>
import QuestItemPanel from '../components/panels/QuestItemPanel.vue'
import JobSantuary from '../components/icons/IconJobSantuary.vue';
import QuestItemsList from '../components/QuestItemsList.vue';
</script>
<template>
    <div class="bg-[#1d4491] " >
        <div class=" bg-[url('../assets/svg/bg/SheikahStateBG.svg')]
        bg-center bg-fixed bg-contain mix-blend-multiply bg-[] opacity-100 h-[400vh]">
            <!--  -->
        
            <div class=" h-screen p-10
            ">
                <QuestItemsList/>
            </div>
        </div>
    </div>
</template>
<style>./* 
Layer pass through 100% 
#0D152D 100%
*/
.filter-sheikah{
    background: #00FFC2;/* #2C74FF #050f2c*/ 
    mix-blend-mode: color;
    opacity: 0.3;
}
</style>