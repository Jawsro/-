<template>
  <div class="news ">
    <Header></Header>
    <div class="main">
      <div class="banner">
        <img src="@/assets/img/news.jpg" alt="">
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
                @click="changeNewsTitle(item.id,item.type_name)">{{item.type_name}}</div>
              </div>
              <!-- 公司新闻-->
              <div class="news-list" v-show="CompanyNews.length>0">
                <div class="item"
                  v-for="item in CompanyNews"
                  :key="item.id"
                  @click="changeNews(item.id)">
                    <span class="iconfont icon-dayuhao"></span>
                    <p class="titles">{{item.title}}</p>
                    <p class="time">{{item.createtime}}</p>
                  </div>
              </div>
              <div class='pages' v-show="CompanyNews.length>0">
                   <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="total"
                      :page-size="9"
                      :current-page='page'
                      @current-change="handleCurrentChange">
                  </el-pagination>
               </div>
              <div class="news-list" v-show='CompanyNews.length<1' style='text-align:center;font-size:14px'>
                 <div class="item">
                    暂无数据
                 </div>
              </div>
            </div>
            
          </el-col>
          <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
      </el-row>
    </div>
    <Footer></Footer>
   <router-view name="a"></router-view>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import {getNewsType,getNewsList} from "../assets/js/api.js";
export default {
  name: "News",
  components: {
    Header,
    Footer,
    Breadcrumb,
  },
  data(){
    return{
      seconedNav:'',
      index:0,
      total:0,
      page:1,
      newsTitle:[
        {id:0,text:"公司新闻"},
        {id:1,text:"行业动态"}
      ],
      CompanyNews:[],
    }
  },
  created(){
    this._getNewsType();
    let location = this.$route.query.location;
    if(location == '行业动态'){
      this.index = 1;
    }
    this.seconedNav =location || this.newsTitle[0].text
  },
  methods:{
    //公司新闻类型
    _getNewsType(){
      this.CompanyNews = []
      getNewsType({}).then( res => {
        if(res.status == true){
          this.newsTitle = res.data.type_list;
          this.index = res.data.type_list[0].id;
          this._getNewsList(this.index)
        }
      })
    },
    //新闻列表
    _getNewsList(id){
      let data ={
        type_id:id,
        page_count:10,
        page:this.page
      }
      this.CompanyNews = [];
      getNewsList(data).then(res =>{
        if(res.status == true){
          this.CompanyNews = res.data.list;
          this.total = res.data.total;
        }
      })
    },
     handleCurrentChange(val) {
        this.page = val;
        this._getNewsList(this.index)
      },
    goNewsContendetail(id){
      this.$router.push({
        path:`/contendetail`,
        query:{
          id:id
        }
    })
    },
    changeNewsTitle(id,secnav){
        this.index = id;
        this.seconedNav = secnav
        this._getNewsList(id)
    },
    changeNews(id){
       this.$router.push({
          path:`/contendetail`,
          query:{
            id:id
          }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
.news /deep/  .el-pagination
    text-align:center
.active
  background:#fff
  border-bottom:1px solid #fff
  color:$title-banckground
  border-top:2px solid $title-banckground

.main
  .banner
    margin-bottom:20px
  .conten
    border:1px solid #E7E7E7
    border-bottom:none
    margin-bottom:20px
    .category
      display:flex
      border-bottom:1px solid #E7E7E7
      background:#F2F2F2
      .category-text
        border-right:1px solid #E7E7E7
        padding:$padding-small $padding-medium
    .news-list
        padding:$padding-small $padding-medium
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
</style>