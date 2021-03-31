<template>
  <div class="header">
    <el-row>
        <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
        <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
          <div class="nav">
            <div class="logo">
              <img src="../../src/assets/logo1.png" alt="">
            </div>
            <div class="nav-search">
              <div class="search">
                <!--<el-input placeholder="请输入内容" v-model="searchValue" class="input-with">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>-->
              </div>
              <div class="nav-menu">
                <ul>
                  <router-link  v-for="(item,index) in nanList"
                    class='li'
                    :to='item.path'
                    tag="li"
                    :key="index"
                    >
                    <div class="friset-nav" 
                    @mouseover="Navhover(item.id)"
                    @click="navClick(item.fristNav,item.secNav[0])">{{item.fristNav}}</div>  
                    <div class="submenu">
                      <div class="sec-nav" 
                        v-for="(secnav,id) in item.secNav"
                        :key="id"
                        v-show="navIshow == index?true:false"  >
                        <div class="sec-nav-item" 
                          @click.stop="getLocation(item.fristNav,secnav,item.path)">
                          {{secnav}}
                        </div>
                      </div>
                    </div>
                  </router-link >
                </ul>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
      </el-row>
  </div>
</template>
<script>
export default {
   data() {
     return{
       searchValue:'',
       nanList:[
         {
           id:0,
           fristNav:"首页",
           secNav:[],
           path:'/'
         },
         {
           id:1,
           fristNav:"公司概况",
           secNav:["公司简介","荣誉资质"],
           path:'/companyintroduction'
         },{
           id:2,
           fristNav:"新闻中心",
           secNav:["公司新闻","行业新闻"],
           path:'/news'
         },{
           id:3,
           fristNav:"产品中心",
           secNav:["不锈钢产品","木质产品"],
           path:'/products'
         },{
           id:4,
           fristNav:"成功案例",
           secNav:[],
           path:'/case'
         },{
           id:5,
           fristNav:"技术设备",
           secNav:["钢制车间","木质车间"],
            path:'/technical'
         },{
           id:6,
           fristNav:"在线订购",
           secNav:[],
            path:'/order'
         },{
           id:7,
           fristNav:"销售网络",
           secNav:[],
            path:'/network'
         },{
           id:8,
           fristNav:"联系我们",
           secNav:[],
            path:'/contactUs'
         }

       ],
     navIshow:0
     }
   },
   methods:{
     Navhover(id){
       this.navIshow = id
     },
     maouseLive(){
       this.navIshow =''
     },
     navClick(fristNav,nav2){
      this.$store.commit("setFirstNav",fristNav)
      this.$store.commit("setSeconedNav",nav2)
     },
     getLocation(navName,secnav,path){
      this.$store.commit("setFirstNav",navName);
      this.$store.commit("setSeconedNav",secnav);
      this.$router.push({path:path,query:{location:secnav}})
     }
   }
}
</script>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
.header /deep/ .el-input-group__append
  background:$header-banckground
.header /deep/ .el-input__inner
  background:$header-banckground
  height:35px
  line-height:35px
.header
  background:$header-banckground
  height:auto !important
  .nav
    display: flex
    justify-content:flex-end
    height:100%
    .logo
      flex:0 0 100px
      width:100px
    .nav-search
      flex:1
      .search
        text-align:right
        padding:$padding-small 0
        .input-with
          width:320px
      .nav-menu
        color:#fff
        ul
          display: flex
          align-content:center
          .li
            flex:1
            position: relative
            text-align:right
            cursor: pointer
            .submenu
              display: flex
              position: absolute
              left:49px
              top:31px
              z-index:8
              width:180px
              background:#fff
              border-radius: 10px
              .sec-nav
                text-align:center
                flex:1
                .sec-nav-item
                  color:#000
                  cursor: pointer
                  padding:$padding-small-s 0
                  display:block
</style>