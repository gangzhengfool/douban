<template>
  <div id="app">

    <router-view/>
    <bar class="bar"></bar>
  </div>
</template>

<script>
  import bar from '../src/components/bar'
export default {


  name: 'app',
  components:{
          bar
  },
  beforeCreate:function(){
  	this.$router.push("/主页");
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

</style>
