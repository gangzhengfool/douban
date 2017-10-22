<template>
  <div id="subject">
    <MyHeader title="書影音">
      <img  class="subjectimg1" slot="img1" src="../assets/images/ic_group_search.png"/>
      <img  class="subjectimg2"  slot="img2" src="../assets/images/ic_chat_green.png"/>
    </MyHeader>
    <div id="nav">
      <router-link to='/书影音/movie'>电影</router-link>
      <router-link to='/书影音/city'>电视</router-link>
      <router-link to='/书影音/movie'>读书</router-link>
      <router-link to='/书影音/city'>同城</router-link>
      <router-link to='/书影音/movie'>音乐</router-link>
      <router-link to='/书影音/city'>市集</router-link>
    </div>
    <router-view></router-view>
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
  #subject{
    width: 100%;
    height: 100%;
  }
  #subject img{
    width:30px;
    top:10px;
  }
  #subject .subjectimg1{
    position: fixed;

    right:70px;
  }
  #subject .subjectimg2{
    position: fixed;

    right:20px;
  }
  #nav{
    width: 100%;
    display: block;
  }
  #nav a{
    width: 11%;
    display: block;
    float: left;
    text-decoration-line: none;
    color: #999;
    text-align: center;

  }
</style>
