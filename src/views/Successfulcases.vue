<template>
  <div class="case">
    <Header></Header>
    <div class="main">
      <div class="banner">
        <img src="@/assets/img/case.jpg" alt="">
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
              <!--成功案例-->
              <div class="introduce">
                <div class="products-main">
                  <div class="proucts-item" 
                      v-for="item in productsImg"
                      :key="item.id">
                    <img :src="item.image_url" alt="">  
                    <p style='padding:10px 0'>{{item.name}}</p>  
                  </div>
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
import {getCaseList} from "../assets/js/api.js";

export default {
  name: "Successfulcases",
  components: {
    Header,
    Footer,
    Breadcrumb
  },
  data(){
    return{
      index:0,
      newsTitle:[
        {id:0,text:"成功案例"}
      ],
      seconedNav:'',
      productsImg:[],
      total:0
    }
  },
  created(){
    this._getCaseList()
    let location = this.$route.query.location;
    if(location == '木质产品'){
      this.index = 1;
    }
    this.seconedNav =location || this.newsTitle[0].text
  },
  methods:{
    changeNewsTitle(id,secnav){
        this.index = id;
        this.$store.commit("setSeconedNav",secnav)
    },
     _getCaseList(){
      let data = {
        page_count:10,
        page:this.page
      }
      getCaseList(data).then(res => {
        if(res.status == true){
          
          this.productsImg = res.data.list;
          this.total = res.data.total
        }
      })
    },
     handleCurrentChange(val) {
        this.page =val;
        this._getCaseList()
      },
  }
}
</script>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
.case /deep/  .el-pagination
    text-align:center
.case /deep/ .el-breadcrumb
  font-size:$font-size-medium-x
.case /deep/ .current-location .el-breadcrumb__inner
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
    padding-bottom:30px
    .category
      display:flex
      border-bottom:1px solid #E7E7E7
      background:#F2F2F2
      .category-text
        border-right:1px solid #E7E7E7
        padding:$padding-small $padding-medium
    .introduce
      .products-main
        padding-top:$padding-small
        display: flex
        flex-wrap:wrap
        .proucts-item
          width:28%
          padding:1%
          margin-left:2%
          margin-bottom:3%
          text-align:center
</style>