<template>
  <div class="home">
      <Header></Header>
      <div class="main">
        <div class="block" >
          <el-carousel trigger="click" :height="imgHeight+'px'">
            <el-carousel-item v-for="(item,index) in banner" :key="index">
              <img :src="item.image_url" alt="" ref="image">
            </el-carousel-item>
          </el-carousel>
        </div>
        <el-row>
          <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
          <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
            <div class="products">
              <div class="title">
                <p class="text">
                  <span class="text1">产品中心/</span>
                  <span class="text2">Products</span>
                </p>
                <span class="iconfont icon-jiahao"></span>
              </div>
              <div class="products-main">
                <div class="left-nav">
                  <el-collapse v-model="activeName" accordion >
                      <el-collapse-item :title="item.type_name" :name="item.id" 
                        v-for="item in productsList"
                        :key="item.id">
                        <div class="sort-name"
                            :class="type_level2Id==sortitem.id?'news-avtive' :''"
                            v-for="(sortitem,index) in item.type_level2"
                            :key="index"
                            @click='getProductsList(sortitem.id)'>
                              <div class="div">{{sortitem.type_name}}</div>
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                </div>
                <div class="right-products">
                  <div class="proucts-item" 
                      v-for="item in productsImg"
                      :key="item.id">
                    <img :src="item.image_url" alt="">    
                    <p style='padding:10px 0'>{{item.name}}</p> 
                  </div>
                  <div class="pruducts-more proucts-item" @click='goProducts'>
                    查看更多>>
                  </div>
                </div>
              </div>
            </div>
            <div class="company">
              <el-row>
                <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
                  <div class="company-introduce">
                    <div class="title">
                        <p class="text">
                          <span class="text1">公司简介/</span>
                          <span class="text2">About us</span>
                        </p>
                        <span class="iconfont icon-jiahao" @click='goCompanyIntroduction'></span>
                    </div>
                    <div class="introduce">
                      <p>湖北大红花商用设备有限公司是宜都市政府于2000年招商引资项目。我公司是-家专业从事设计、生产、销售超市果蔬架、不锈钢系列及其它配套产品的专业生产厂家。可以根据客户要求,设计出适合用户使用的布局方案。</p>
                      <p>公司成立七年来,本着立足全国,放眼世界的创业理念,引进了国内外先进技术及工艺,所生产的豪华型果蔬架、冷气保鲜展示柜、超市生鲜柜台、不锈钢生鲜设备,已成功地被世界一流的法国...</p>
                      <img src="../../src/assets/img/company.jpg" alt="">
                    </div>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                  <div class="news">
                    <div class="news-title">
                      <div class="company-news" 
                        v-for="item in newsTitle" 
                        :key="item.id"
                        :class="index==item.id?'active' :'inactive'"
                        @click="changeNewsTitle(item.id)"> 
                        {{item.type_name}} 
                      </div>
                    </div>
                    <!-- 新闻-->
                    <div class="news-list" v-show='CompanyNews.length>0'>
                      <div class="item"
                        v-for="item in CompanyNews"
                        :key="item.id"
                        :class="newsId==item.id?'news-avtive' :''"
                        @click="goNewsContendetail(item.id)">
                          <span class="iconfont icon-dayuhao"></span>
                          <p class="titles">{{item.title}}</p>
                          <p class="time">{{item.createtime}}</p>
                      </div>
                      <div class="morenews" @click='goNews'>
                        <span>查看更多</span>
                        <span class="iconfont icon-dayuhao" ></span>
                      </div>
                    </div>
                    <div class="news-list" v-show='CompanyNews.length<1' style='text-align:center;padding-top:50px'>
                      暂无数据
                    </div>
                      
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
        </el-row>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import {getHomepageSwiper,getProductType,getProductList,getNewsType,getNewsList} from "../assets/js/api.js";
export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeName: '1',//控制产品一级分类切换
      productsList:[],//产品分类列表
      productsImg:[],//产品列表
      index:0,//控制新闻标题样式
      type_level2Id:0,//控制二级分类点击样式
      newsId:1,//新闻显示样式
      banner:[],//轮播图
      imgHeight: "",//轮播图高度
      CompanyNews:[],//新闻列表
      newsTitle:[],//新闻类型
    };
  },   
  created(){
    this._getHomepageSwiper();
    this._getProductType();
    this._getNewsType();
  },
  mounted() {
    // 监听窗口变化，使得轮播图高度自适应图片高度
    window.addEventListener("resize", () => {
      this.imgHeight = this.$refs.image[0].height;
    });
  },
  methods: {
    //切换商品列表
    getProductsList(id){
      this.type_level2Id = id
      this._getProductList(id)
    },
    imgLoad() {
      this.$nextTick(function() {
        // 获取窗口宽度*图片的比例，定义页面初始的轮播图高度
        this.imgHeight = document.body.clientWidth*1/3
      });
    },
    //轮播图
    _getHomepageSwiper(){
      getHomepageSwiper({}).then(res =>{
        if(res.status == true){
          this.banner = res.data
          this.imgLoad();
        }
      })
    },
    //公司新闻类型
    _getNewsType(){
      this.CompanyNews = []
      getNewsType({}).then( res => {
        if(res.status == true){
          this.newsTitle = res.data.type_list;
          this.CompanyNews = res.data.news_list;
          this.index = res.data.type_list[0].id;
        }
      })
    },
    //新闻列表
    _getNewsList(id){
      let data ={
        type_id:id,
        page_count:6,
        page:1
      }
      this.CompanyNews = [];
      getNewsList(data).then(res =>{
        if(res.status == true){
          this.CompanyNews = res.data.list;
        }
      })
    },
    //新闻详情
    goNewsContendetail(id){
      this.$router.push({
        path:`/contendetail`,
        query:{
          id:id
        }
    })
    },
    //产品分类
    _getProductType(){
      let data = {}
      getProductType(data).then(res =>{
       
        if(res.status == true){
          this.productsList = res.data.type_level1;
          this.activeName  = res.data.type_level1[0].id;
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
        page_count:8,
        page:1
      }
      getProductList(data).then( res =>{
         if(res.status == true){
           this.productsImg = res.data.list
          
         }
      })
    },
    changeNewsTitle(id){
      this.index = id;
      this._getNewsList(id);
      
    },
    changeNews(id){
      this.newsId=id;
    },
    goProducts(){
      this.$router.push({path:'/products'})
    },
    goCompanyIntroduction(){
      this.$router.push({path:'/companyintroduction'})
    },
    goNews(){
      this.$router.push({path:'/news'})
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
.home /deep/  .el-collapse-item__content
  padding-bottom:0
.home /deep/ .el-collapse-item__header
  font-size:$font-size-large
  font-weight:$font-weight-blod
  color:$color-text-p 
  background:#F9F9F9
  padding-left:65px
.active
  background: $title-banckground
  color:$color-text-f 
.news-avtive
  color:$title-banckground
.title
  background:$title-banckground
  color:$color-text-f
  display: flex
  align-items: center
  .text
    flex:1
    padding:$padding-small-s
    .text1
      font-size:$font-size-large 
      font-weight:$font-weight-blod 
    .text2
      font-size:$font-size-medium
      margin-left:$padding-small-s 
  .icon-jiahao
    flex:0 0 30px
.main
  margin-bottom:$padding-medium
  .products
    margin:$padding-medium 0
    .products-main
      display: flex
      align-items:flex-start 
      margin-top:$padding-small 
      .left-nav
        flex:0 0 250px
        margin-right:$padding-small
        .sort-name
          background:#F9F9F9
          div
            border-top:1px solid #E0E0E0
            text-align:center
            padding:$padding-small 0
      .right-products
        display: flex
        flex-wrap:wrap
        justify-content:flex-start
        flex: 1
        .proucts-item
          width:28%
          border:1px solid #E0E0E0
          padding:1%
          margin-left:2%
          margin-bottom:3%
          text-align:center
        .pruducts-more
          display: flex;
          flex-direction: column   
          justify-content: center  
          align-items: center
  .company
    display: flex
    align-items:flex-start
    .company-introduce
      font-size:$font-size-medium
      margin-right:$padding-small
      margin-top:$padding-medium
      .introduce
        font-size:$font-size-medium
        p
          text-indent: 2em
          line-height:200%
          text-align:justify
          text-justify:distribute-all-lines
    .news
      margin-top:$padding-medium
      .news-title
        display: flex
        justify-content: center  
        align-items: center
        text-align:center
        .company-news
          flex:1
          font-size:$font-size-large
          padding:$padding-small-s
          font-weight:$font-weight-blod
      .news-list
        padding:$main-padding
        .item
          padding:$padding-small 0
          display:flex
          .icon-dayuhao
            flex:0 0 30px
          .titles
            flex:1
            font-size:$font-size-medium
            overflow:hidden
            text-overflow:ellipsis 
            white-space:nowrap
            word-break:break-all;
          .time
            flex:0 0 115px
            text-align:right
        .item + .item
          border-top:1px dashed #E6E6E6
      .morenews
        background:#E6E6E6
        padding:$padding-small 
        font-size:$font-size-medium
        text-align:right
        margin-top:16px
</style>