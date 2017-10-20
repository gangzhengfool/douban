<template>
  <div id="item"  @click="fn">
  	<span v-show="!imgshow"><slot  name="normal"> </slot><br></span>
  	<span v-show ="imgshow"><slot  name="active" > </slot><br></span>
  	<span :class="{active:imgshow}">{{ txt }}</span>
  </div>
</template>
<script>
export default {
  name: 'item',
  props:["txt","title"],
  computed:{
  	imgshow:function(){
  		return this.txt==this.title;
  	},

  },

    methods:{
      fn:function(){

        //return "";
      
        this.$emit("change",this.txt);
        

      }
    },
  
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
#item span{
      text-align:center;
}
#item .active{
  color: #5CFF66;
}
</style>
