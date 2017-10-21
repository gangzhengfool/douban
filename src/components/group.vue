<template>
  <div class="group">
    <MyHeader title="小組">
      <img  id="groupimg1" slot="img1" src="../assets/images/ic_group_search.png"/>

      <img  id="groupimg2"  slot="img2" src="../assets/images/ic_chat_green.png"/>
    </MyHeader>
    <h1> 小组 </h1>
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

  img{
    width:30px;
    top:10px;
  }
  #groupimg1{
    position: fixed;

    right:70px;
  }
 #groupimg2{
    position: fixed;

    right:20px;
  }
</style>
