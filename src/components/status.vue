<template>
  <div class="">
    <MyHeader title="廣播">
      <img  id="statusimg1" slot="img1" src="../assets/images/ic_status_search_user.png"/>
      <img  id="statusimg2"  slot="img2" src="../assets/images/ic_chat_green.png"/>
    </MyHeader>
    <h1> 廣播 </h1>
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
  #statusimg1{
    position: fixed;

    right:70px;
  }
  #statusimg2{
    position: fixed;

    right:20px;
  }
</style>
