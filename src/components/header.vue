<template>
  <div :class="{ header:true, activeHead:title==''}">
     <slot name="img1"></slot>
    <span>{{ title }}</span>
     <slot name="div"></slot>
     <slot name="img2"></slot>



  </div>
</template>
<script>
//todo  props用不了
//忘了点号
  export default {
   props:["title",]



  }
</script>
<style>
    .header{
      width: 100%;
      height: 50px;

      text-align: center;
      line-height: 50px;
    }
  .activeHead{
    background-color: #5CFF66;
  }
</style>
