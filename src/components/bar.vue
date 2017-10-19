<template>
  <div id="bar">
  	<item  txt="主页"  title="主页"> 
  		<img src="../assets/images/ic_tab_home_active.png" slot="active">
  		<img src="../assets/images/ic_tab_home_normal.png" slot="normal">
  	</item>

  	<item  txt="我的" title="我的"> 
  		<img src="../assets/images/ic_tab_profile_active.png" slot="active">
  		<img src="../assets/images/ic_tab_profile_normal.png" slot="normal">
  	</item>

  	<item  txt="小组" title="小组"> 
  		<img src="../assets/images/ic_tab_group_active.png" slot="active">
  		<img src="../assets/images/ic_tab_group_normal.png" slot="normal">
  	</item>

  	<item  txt="书影音" title="书影音" > 
  		<img src="../assets/images/ic_tab_subject_active.png" slot="active">
  		<img src="../assets/images/ic_tab_subject_normal.png" slot="normal">
  	</item>

	<item  txt="广播" title="广播"> 
  		<img src="../assets/images/ic_tab_status_active.png" slot="active">
  		<img src="../assets/images/ic_tab_status_normal.png" slot="normal">
  	</item>
  	
  </div>
</template>

<script>
import item from '../components/item'
export default {
  name: 'bar',
  components:{
  	item
  }
  
}
</script>
<style scoped>
#bar {
	height: 60px;
	width: 100%;
	position: fixed;
	left: 0;
	background-color: pink;
	bottom: 0;
	}

</style>