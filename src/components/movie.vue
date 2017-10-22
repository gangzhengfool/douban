<template>
  <div >
    <div class="empty"></div>
    <div class="title">
      <br/><br/><h3>影院热映</h3>
      <span>全部{{movie_in_theaters.subjects.length}}></span>
    </div>

    <div id="movie_in_theaters">
      <ul>
        <li v-for="(item,index) in movie_in_theaters.subjects">
          <img :src="item.images.large">
          <h3>{{  item.title.substring(0,7) }}{{  item.title.length>=7?'...':''}}</h3>
          <div class="bigstar40"></div>
        </li>
      </ul>
    </div>
    <div class="empty">

    </div>
    <div class="title">
      <br/><br/><h3>{{  coming_soon.title  }}</h3>
      <span>全部{{coming_soon.subjects.length}}></span>
    </div>
    <div id="coming_soon_movie">
      <ul>
        <li v-for="(item,index) in coming_soon.subjects">
          <p>{{ item.mainland_pubdate.substring(5,10) }}</p>
         <img :src="item.images.large">
          <h3>{{  item.title.substring(0,7) }}{{  item.title.length>=7?'...':''}}</h3>
          <div class="bigstar40"></div>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import MyHeader from '../components/header'
  export default {
    data:function(){
      return {
        movie_in_theaters:[],
        coming_soon:[],
      }
  },
    props:[],
    created:function () {
      this.axios.get('/api/movie').then((response) => {
        this.movie_in_theaters=response.data.data;

      })
      this.axios.get('/api/coming_soon').then((response) => {

        this.coming_soon=response.data.data;
       // console.log(response);
        console.log(this.coming_soon);

      })
      this.axios.get('/api/top250').then((response) => {




      })
    }

  }
</script>
<style>
  /*  类似轮播图效果
       外部设置小的，list设置大的，外部 overflow: hidden;
  */

  @import "https://img3.doubanio.com/f/shire/94213e812acbb00123f685909b4768bb304d16f3/css/douban.css";
  #movie_in_theaters, #coming_soon_movie{

    width: 100%;
    overflow-x:scroll;

  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  #movie_in_theaters ul, #coming_soon_movie ul{

    width: 20000%;
    list-style: none;

  }

  #movie_in_theaters ul li,#coming_soon_movie ul li{
    float: left;
    width: 150px;
  }

  #movie_in_theaters img,#coming_soon_movie img{
    width: 100px;
  }
  #movie_in_theaters h3{
    background-color: #fff;
    text-align: left;
  }
  .title{
    display: block;
    position:relative;
    height: 30px;
    width: 100%;
    /*background-color: pink;*/
  }
  .title h3{
    background-color: #fff;
    display: inline-block;
    position:absolute;
  top:5px;

  }

  .empty{
    height: 50px;

  }
  /**
      父相對子絕對

   */
  .title span{
    position:absolute;
    right:20px;
    top:5px;
    font-size: 13px;


  }
</style>
