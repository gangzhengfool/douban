<template>
  <h1>我是电影</h1>
</template>
<script>
  import MyHeader from '../components/header'
  export default {
    created:function () {
      this.axios.get('/api/movie').then((response) => {
        this.arr=response.data.data.recommend_feeds;
        //this.imgSrc=this.arr.target.cover_url;
        console.log(response);

      })
      this.axios.get('/api/coming_soon').then((response) => {
        this.arr=response.data.data.recommend_feeds;
        //this.imgSrc=this.arr.target.cover_url;
        console.log(response);

      })
      this.axios.get('/api/top250').then((response) => {
        this.arr=response.data.data.recommend_feeds;
        //this.imgSrc=this.arr.target.cover_url;
        console.log(response);

      })
    }

  }
</script>
