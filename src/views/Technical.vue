<template>
  <div class="products">
    <Header></Header>
    <div class="main">
      <div class="banner">
        <img src="@/assets/img/technical.png" alt="">
      </div>
      <el-row>
          <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
          <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
            <Breadcrumb :seconedNav='seconedNav'></Breadcrumb>
            <div class="conten">
              <div class="category">
                <div class="category-text" 
                v-for="item in newsTitle" 
                :key="item.id"
                :class="index==item.id?'active' :''"
                @click="changeNewsTitle(item.id,item.text)">{{item.text}}</div>
              </div>
              
              <div class="introduce">
                <div style='padding:50px 0;text-align:center'>暂无数据</div>
                <!--<div class="products-main">
                  <div class="proucts-item" 
                      v-for="item in productsImg"
                      :key="item.id">
                    <img :src="item.src" alt="">   
                    <p>{{item.text}}</p> 
                  </div>
                </div>-->
              </div>

            </div>
            
          </el-col>
          <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
      </el-row>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "Technical",
  components: {
    Header,
    Footer,
    Breadcrumb,
  },
  data(){
    return{
      index:0,
      newsTitle:[
        {id:0,text:"钢制车间"},
        {id:1,text:"木质车间"}
      ],
      seconedNav:'',
      sortList:["干货休闲系列","果蔬系列","禽蛋系列","蜂蜜花茶系列","粮食系列","面包系列","酱菜系列","促销堆码及配件系列"],
      productsImg:[],
    }
  },
  created(){
    let location = this.$route.query.location;
    if(location == '木质产品'){
      this.index = 1;
    }
    this.seconedNav =location || this.newsTitle[0].text
  },
  methods:{
    changeNewsTitle(id,secnav){
        this.index = id;
        this.seconedNav = secnav
    },
  }
}
</script>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
.products /deep/ .el-breadcrumb
  font-size:$font-size-medium-x
.products /deep/ .current-location .el-breadcrumb__inner
  color:#000
.active
  background:#fff
  border-bottom:1px solid #fff
  color:$title-banckground
  border-top:2px solid $title-banckground

.main
  .banner
    margin-bottom:$padding-medium
  .breadcrumb
    font-size:$font-size-medium-x
    display:flex
    align-items:flex-end
    color: #606266
    margin-bottom:$padding-medium
  .conten
    border:1px solid #E7E7E7
    border-bottom:none
    .category
      display:flex
      border-bottom:1px solid #E7E7E7
      background:#F2F2F2
      .category-text
        border-right:1px solid #E7E7E7
        padding:$padding-small $padding-medium
    .introduce
      padding-top:$padding-medium
      .products-main
        display: flex
        flex-wrap:wrap
        .proucts-item
          width:28%
          padding:1%
          margin-left:2%
          margin-bottom:3%
          text-align:center
</style>