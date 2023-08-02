<script>
import IconHome from './icons/IconHome.vue';
export default{
    data() {
        return {
            users: [
                { 
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wbnBqQtZnz-yK37MmQVO2JzjoYH1vrRQtQ&usqp=CAU",
                    UserName:"Link",
                    Postulation:[],
                    id:1
                },
            ]
        };
    },
    components: { IconHome }
}
</script>
<template>
        <div class="flex justify-center  bg-[url('../assets/svg/bg/SheikahHeaderBG.svg')]">
            
            <div class="grid grid-cols-6  w-full pt-3 ">
                <span class="flex justify-center col-span-1"><IconHome/></span>
                <span class="items-center pt-1 col-span-4">
                    <p class="text-xl text-center font-['Hylia_Serif_Beta'] ">Link'din</p>
                </span>
                <!-- ../assets/img/LikAccount.png -->
                <span class="col-span-1"
                v-for="(user) in users" :key="user.id">
                <img class="rounded-full h-11 w-11" :src="user.image" :alt="user.UserName">
                </span>
                
            </div>
        </div>
</template>