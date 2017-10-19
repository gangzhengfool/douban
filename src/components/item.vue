<template>
  <div id="item">
  	<span v-show="imgshow"><slot  name="normal" > </slot></span><br>
  	<span v-show ="!imgshow"><slot  name="active" > </slot></span><br>
  	<span>{{ txt }}</span>
  </div>
</template>
<script>
export default {
  name: 'item',
  props:["txt","title"],
  computed:{
  	imgshow:function(){
  		return true;
  	}
  }
}
</script>
<style scoped>
      #item {
      	float: left;
      	width: 20%;
      	
      }
      #item  img{
	width: 40px;
	
}
</style>
