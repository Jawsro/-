<template>
  <div class="breadcrumb">
    <span> 当前位置：</span>
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{crumbData[0]}}</el-breadcrumb-item>
        <el-breadcrumb-item class="current-location">{{seconedNav}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        crumbData:[]
      }
    },
    props:{
      seconedNav:String
    },
  created(){
    let temp = [];
    this.$route.matched.filter((item) => {
        if(item.meta.title){
            const title = item.meta.title;
            temp.push(title);
        }
    });
    this.crumbData =  temp;
  }
}
</script>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
.breadcrumb /deep/ .el-breadcrumb
  font-size:$font-size-medium-x
.breadcrumb  /deep/ .current-location .el-breadcrumb__inner
  color:#000
.breadcrumb
  font-size:$font-size-medium-x
  display:flex
  align-items:flex-end
  color: #606266
  margin-bottom:$padding-medium
</style>