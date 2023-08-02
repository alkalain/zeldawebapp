<script>
export default {
  props: {
    Click: { type: Boolean, default: true,  },
  },
  methods:{
    onClick(){
       this.$emit('toggle')
    }
  }
};
</script>

<template>
  <!-- 
    on call :
    ad :showToggle="fuction that the button needs to excute"
  -->
  <button
    type="button"
    
    @click="onClick"
  >
    <slot>
      
    </slot>
  </button>
</template>
