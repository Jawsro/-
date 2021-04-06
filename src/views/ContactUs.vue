<template>
  <div class="contactUs">
      <Header></Header>
      <div class="main">
        <img src="@/assets/img/map.png" alt="">
        <el-row>
          <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
          <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
            <div class="contact-information">
              <h2 class="company-bame">湖北大红花商用设备有限公司</h2>
              <div class="information">
                <div class="left">
                  <p >邮编： 443302</p>
                  <p>电话： <span style='margin-right:5px'>0717-4880251</span> 0717-4881098 (传真)</p>
                  <p>地址：湖北省宜都市红花套镇红花套村</p>
                </div>
                <div class="right">
                  <p>
                    <span>手机：</span>
                    <span style='margin-right:5px'>13986804328</span>
                    <span>13986776714</span>
                  </p>
                  <p>邮箱： wjh-1109@163. com</p>
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

export default {
  name: "ContactUs",
  components: {
    Header,
    Footer
  },
  data() {
    return {
     
    };
  },   
};
</script>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
.main
  margin-bottom:$padding-medium
  .contact-information
    .company-bame
      border-bottom:1px solid #ECECEC
      padding:$padding-medium  0  $padding-small
    .information
      display:flex
      .left
        flex-basis:auto
        margin-right:100px
        p
          padding-top:$padding-small
      .right
        flex-basis:auto
        p
          padding-top:$padding-small
</style>