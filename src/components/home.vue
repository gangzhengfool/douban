<template>
  <div class="home">
    <MyHeader  title="">
      <img  id="homeimg1" slot="img1" src="../assets/images/ic_group_tab_search.png"/>
      <div  id="homediv" slot="div"><input :placeholder="placeholderMsg"/></div>
      <img  id="homeimg2"  slot="img2" src="../assets/images/ic_chat_white.png"/>
    </MyHeader>
   <div class="content" v-for="item in arr">
          <div id="left">
            <h4> {{ item.title}}</h4>
            <span> {{ item.target.desc}}</span>
            <span> {{ item.target.desc}}</span>
            <span> {{ item.target.author.name }}</span>
          </div>
     <div id="right">
       <img  id="rightImg" :src="item.target.cover_url" alt=""  onerror="this.src='https://b-ssl.duitang.com/uploads/item/201405/18/20140518013405_xAuNP.jpeg'">

     </div>

   </div>
  </div>
</template>
<script>
  import MyHeader from '../components/header'
  export default {
    data:function(){
      return {
        placeholderMsg:"影視 圖書 唱片 小組 舞台劇等",
        arr:[],

      }
    },
    mounted:function(){
      this.axios.get('/api/homeData').then((response) => {
        this.arr=response.data.data.recommend_feeds;
        //this.imgSrc=this.arr.target.cover_url;
        console.log(response.data.data.recommend_feeds);

      })
    },
    components:{
      MyHeader
    },


  }


</script>

<style>

  .home img{
    width:30px;
    top:12px;
  }
  .home #homeimg1{
    position: fixed;
    z-index:100;
    left:18px;
  }
  .home  #homeimg2{
    position: fixed;

    right:20px;
  }
  .home  #homediv{
    width: 80%;
    position: fixed;
    height: 30px;
    top:10px;
    z-index:1;
    left:8px;
    background-color: #fff;
    border-radius: 5px;
  }
   .home  input{
    border: none;
    position: fixed;
    top:20px;
    left:50px;
    width:60%;
  }
  .content #left {

    float: left;
    width: 70%;
  }
  .content #right img{
    width: 80px;
    height: 80px;
    float: right;
  }
</style>
