<template>
  <div class="products">
    <Header></Header>
    <div class="main">
     <div class="banner">
        <img src="@/assets/img/banner.jpg" alt="">
      </div>
      <el-row>
          <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
          <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
            <Breadcrumb :seconedNav='seconedNav'></Breadcrumb>
            <div class="conten">
              <div class="category">
              <!--一级分类-->
                <div class="category-text" 
                  v-for="(item,index) in productsList" 
                  :key="item.id"
                  :class="activeName==item.id?'active' :''"
                  @click="changeNewsTitle(item.id,item.type_name,index)">
                  {{item.type_name}}
                  </div>
              </div>
              <div class="introduce" >
              <!--二级分类-->
                <div class="sort-title">
                  <div class="item"
                    :class="type_level2Id==item.id?'textcolor':''"
                    v-for="(item,index) in sortList"
                    :key='index'
                    @click='getProductsList(item.id)'>
                    <div >{{item.type_name}}</div>
                  </div>
                </div>
                <!--商品列表-->
                <div class="products-main">
                  <div class="proucts-item" 
                      v-for="item in productsImg"
                      :key="item.id">
                    <div class="img"><img :src="item.image_url" alt=""> </div>  
                    <p style='padding:10px 0'>{{item.name}}</p> 
                  </div>
                </div>
               <div class='pages'>
                   <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="total"
                     :page-size="9"
                     :current-page='page'
                      @current-change="handleCurrentChange">
                  </el-pagination>
               </div>
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
import {getProductType,getProductList} from "../assets/js/api.js";
export default {
  name: "Products",
  components: {
    Header,
    Footer,
    Breadcrumb,
  },
  data(){
    return{
      activeName:0,
      sortIndex:0,
      total:0,
      page:1,
      productsList:[],//产品分类
      productsImg:[],//产品列表
      type_level2Id:0,
      newsTitle:[
        {id:0,text:"不锈钢产品"},
        {id:1,text:"木质产品"}
      ],
      seconedNav:'',
      sortList:[],//二级分类
    }
  },
  created(){
    this._getProductType();
    let location = this.$route.query.location;
    if(location == '木质产品'){
      this.activeName = 1;
    }
    this.seconedNav =location || this.newsTitle[0].text
  },
  methods:{
     //切换商品列表
    getProductsList(id){
      this.page = 1;
      this.type_level2Id = id;
      this._getProductList(id)
    },
     //产品分类
    _getProductType(){
      let data = {}
      getProductType(data).then(res =>{
        if(res.status == true){
          this.productsList = res.data.type_level1;
          this.activeName  = res.data.type_level1[0].id;
          this.sortList =this.productsList[this.sortIndex].type_level2
          let id = res.data.type_level1[0].type_level2[0].id;
          this.type_level2Id = id;
          this._getProductList(id)
        }
      })
    },
     //产品列表
    _getProductList(id){
      let data = {
        type_id :id,
        page_count:9,
        page:this.page
      }
      getProductList(data).then( res =>{
         if(res.status == true){
           this.productsImg = res.data.list
           this.total =  res.data.total
         }
      })
    },
      handleCurrentChange(val) {
        this.page =val;
        this._getProductList(this.type_level2Id)
      },
    changeNewsTitle(id,secnav,index){
        this.activeName = id;
        this.seconedNav = secnav;
        this.sortIndex = index;
        this.sortList =this.productsList[index].type_level2
        this.type_level2Id = this.sortList[0].id
        this._getProductList(this.type_level2Id)
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
 .products /deep/  .el-pagination
    text-align:center
.active
  background:#fff
  border-bottom:1px solid #fff
  color:$title-banckground
  border-top:2px solid $title-banckground
.textcolor
  color:$title-banckground
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
    padding-bottom:30px
    .category
      display:flex
      border-bottom:1px solid #E7E7E7
      background:#F2F2F2
      .category-text
        border-right:1px solid #E7E7E7
        padding:$padding-small $padding-medium
    .introduce
      .sort-title
        display:flex
        flex-wrap:wrap
        .item
          flex-basis:auto
          padding:$padding-small
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