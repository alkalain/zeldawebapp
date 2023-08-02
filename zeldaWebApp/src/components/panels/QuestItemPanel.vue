<script >
export default{
/* props:{
    showTaoggle:{type:Boolean, default: false},
}, */
}
</script>
<template>
<!--
    TODO :
        - correct quest bg transparance
        - make border color transparant and gradient 
         bg-gradient-to-b from-[#00000080] from-53,0.2% to-[rgba(0, 0, 0, 0.185)] to-100%
         bg-gradient-to-b from-[rgba(0,0,0,0.5)] from-53,0.2% to-[rgba(0,0,0,0.18)] to-100% -->
        <div class="
        bg-linear bg-opacity-100
        w-[45%] h-[20%] border-solid  
        rounded-[10px]
        p-1
        
        ">
        <div class=" rounded-lg 
            ">
            <div class="
            grid grid-cols-6 h-full 
            border-white border-[2px] box-border border-spacing-1 
            rounded-lg
            
            ">
                <header class="
                flex flex-row justify-center items-center p-3
                w-16 h-full
                col-span-1
                "><!-- some inside code to place don't now where :
                    flex-none order-none flex-grow-0 z-0-->
                    <!-- acctually the logo -->
                    <slot name="logo">
                        <div class="w-15 h-15
                        blur-[0.25px] drop-shadow-[0px_1.25px_13.75px_rgba(79, 192, 255, 1)]
                        drop-sadow-[0px_0px_12.5px_rgba(79, 192, 255, 0.88)]

                        ">

                        </div>
                    </slot>
                </header>
                <main class="col-span-4 flex flex-col items-start py-3 pl-3 pr-2">
                    <slot name="theText">
                        <div class="flex-none order-1 self-stretch flex-grow-1 z-1
                        font-semibold italic text-[17px] text-[#FFFF]
                        bg-none
                        ">
                            txt
                        </div>
                    </slot>
                </main>
                
                <footer class=" col-span-1 flex justify-center items-center pl-[45%]">
                    <slot  name="elipse">
                        <!-- <div class="bg-white mix-blend-overlay rounded-md
                        flex justify-center items-center h-[90%] w-[75%]">
                            <div class="
                            bg-black w-[6px] h-[6px] rounded-[100%]
                            " >
                        </div>
                    </div> -->
                </slot>
                <!--  v-show="showToggle" @click="msg=!msg" @click="$emit('toggle')" -->
                </footer>
            </div>
            </div>
        </div>
</template>
<style>
.bg-linear{
 background: linear-gradient(180deg, rgba(17, 17, 17, 0.5) 53.02%, rgba(0, 0, 0, 0.185) 100%);

}
</style>