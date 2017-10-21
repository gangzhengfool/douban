<template>
  <div id="bar">
  	<item  txt="主页"  :title="sel" @change="showNum">
  		<img src="../assets/images/ic_tab_home_active.png" slot="active" >
  		<img src="../assets/images/ic_tab_home_normal.png" slot="normal">
  	</item>
    <item  txt="书影音" :title="sel" @change="showNum">
      <img src="../assets/images/ic_tab_subject_active.png" slot="active">
      <img src="../assets/images/ic_tab_subject_normal.png" slot="normal">
    </item>
    <item  txt="广播" :title="sel" @change="showNum">
      <img src="../assets/images/ic_tab_status_active.png" slot="active">
      <img src="../assets/images/ic_tab_status_normal.png" slot="normal">
    </item>


  	<item  txt="小组" :title="sel" @change="showNum">
  		<img src="../assets/images/ic_tab_group_active.png" slot="active">
  		<img src="../assets/images/ic_tab_group_normal.png" slot="normal">
  	</item>
    <item  txt="我的" :title="sel" @change="showNum">
      <img src="../assets/images/ic_tab_profile_active.png" slot="active">
      <img src="../assets/images/ic_tab_profile_normal.png" slot="normal">
    </item>





  </div>
</template>

<script>
import item from '../components/item'
export default {
  name: 'bar',
  components:{
  	item
  },
  data:function(){
    return {
            sel:"主页"
  };

  },
  methods:{
    showNum:function(val){

      this.sel=val;
       this.$router.push("/"+val);
    }
  }

}
</script>
<style scoped>
#bar {
	height: 70px;
	width: 100%;
	position: fixed;
	left: 0;
	background-color: pink;
	bottom: 0;
	}

</style>
