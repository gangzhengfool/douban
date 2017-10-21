<template>
  <div class="mime">
    <MyHeader title="我的">

      <img  id="mimeimg2"  slot="img2" src="../assets/images/ic_settings.png"/>
    </MyHeader>
    <h1> 我的 </h1>
  </div>
</template>
<script>
  import MyHeader from '../components/header'
  export default {
    components:{
      MyHeader
    },


  }
</script>

<style>

  .mime img{
    width:30px;
    top:10px;
  }

  .mime #mimeimg2{
    position: fixed;

    right:20px;
  }
</style>
