<template>
  <div class="companyintroduction">
    <Header></Header>
    <div class="main">
      <div class="banner">
        <img src="@/assets/img/company.jpg" alt="">
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
              <!--公司简介-->
              <div class="introduce" v-show="newsIshow">
                <p>湖北大红花商用设备有限公司是宜都市政府于2000年招商引资项目。我公司是-家专业从事设计、生产、销售超市果蔬架、不锈钢系列及其它配套产品的专业生产厂家。可以根据客户要求,设计出适合用户使用的布局方案。</p>
                <p>公司成立七年来,本着立足全国,放眼世界的创业理念,引进了国内外先进技术及工艺,所生产的豪华型果蔬架、冷气保鲜展示柜、超市生鲜柜台、不锈钢生鲜设备,已成功地被世界一流的法国</p>
                <img src="../../src/assets/img/company.jpg" alt="">
              </div>
              <!--荣誉资质-->
              <div class="introduce" v-show="!newsIshow">
                <div style='padding:50px 0;text-align:center'>暂无数据</div>
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
  name: "CompanyIntroduction",
  components: {
    Header,
    Footer,
    Breadcrumb
  },
  data(){
    return{
      index:0,
      newsTitle:[
        {id:0,text:"公司简介"},
        {id:1,text:"荣誉资质"}
      ],
      newsIshow:true,
      seconedNav:'',
    }
  },
  created(){
    let location = this.$route.query.location;
    if(location == '荣誉资质'){
      this.index = 1;
    }
    this.seconedNav =location || this.newsTitle[0].text
  },
  methods:{
    changeNewsTitle(id,secnav){
      this.index = id;
      this.newsIshow =!this.newsIshow;
      this.seconedNav =secnav
    },
  }
}
</script>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
.companyintroduction /deep/ .el-breadcrumb
  font-size:$font-size-medium-x
.companyintroduction /deep/ .current-location .el-breadcrumb__inner
  color:#000
.active
  background:#fff
  border-bottom:1px solid #fff
  color:$title-banckground
  border-top:2px solid $title-banckground

.main
  .banner
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
      font-size:$font-size-medium
      padding:$padding-small-s $padding-small $padding-medium 
      p
        text-indent: 2em
        line-height:200%
        text-align:justify
        text-justify:distribute-all-lines 
</style>