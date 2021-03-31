<template>
  <div class="footer">
    <div class="footer-top">
      <el-row>
        <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
        <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
          <div>
            <el-row :gutter="10">
              <el-col :xs="24" :sm="24" :md="20" :lg="20" :xl="21">
                <ul class="footer-nav">
                  <li><p class="color-text">网站首页</p></li>
                  <li>
                    <p>公司概况</p>
                    <div class="pages">
                      <p>企业简介</p>
                      <p>组织机构</p>
                      <p>企业文化</p>
                      <p>荣誉资质</p>
                      <p>人才招聘</p>
                    </div>
                  </li>
                  <li>
                    <p>新闻中心</p>
                    <div class="pages">
                      <p>公司新闻</p>
                      <p>行业动态</p>
                    </div>
                  </li>
                  <li>
                    <p>产品中心</p>
                  </li>
                  <li>
                    <p>成功案例</p>
                  </li>
                  <li>
                    <p>技术设备</p>
                  </li>
                  <li>
                    <p>在线订购</p>
                  </li>
                  <li>
                    <p>销售网络</p>
                  </li>
                  <li>
                    <p>联系我们</p>
                    <div class="pages">
                      <p>联系方式</p>
                      <p>留言咨询</p>
                    </div>
                  </li>
                </ul>
              </el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="3">
                <div>
                  <img src="../../src/assets/saoma.jpg" alt="">
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
      </el-row>
    </div>
    <div class="footer-bottom">
        <el-row>
          <el-col :xs="1" :sm="3" :md="4" :lg="5" :xl="5" style="color: transparent;">1</el-col>
          <el-col :xs="22" :sm="18" :md="16" :lg="14" :xl="14">
            <div class="footer-contant">
              <el-row >
                <el-col :xs="24" :sm="4" :md="6" :lg="4" :xl="6">
                  <div >
                    <p class="contant-us">联系我们</p>
                    <p class="margin-top">邮编：443302</p>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="10" :md="9" :lg="10" :xl="9">
                  <div >
                    <p class="margin-top">手机号：13986804328 13986776714</p>
                    <p class="margin-top">电话:0717-4880251 0717-4881098(传真)</p>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="10" :md="9" :lg="10" :xl="9">
                  <div class="">
                    <p class="margin-top">邮箱: wjh-1109@163.com</p>
                    <p class="margin-top">武汉办事处:硚C区操场角6号汉华花园B座11--5号</p>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="banquan">
              <span>&copy;2016湖北大红花商用设备有限公司</span>
              <span>技术支持:商友科技</span>
            </div>
          </el-col>
          <el-col :xs="1" :sm="3" :md="4" :lg="5" :xl="5" style="color: transparent;">1</el-col>
        </el-row>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
.footer
    background:$footer-banckground
    padding:0
    height:auto !important
    color:$color-text-f
    .footer-top
      padding-bottom:$padding-medium
      padding-top:$padding-medium
      .footer-nav
        display: flex
        justify-content: center
        align-items: top
        li
          flex:1
          font-size:$font-size-medium
          .color-text
            color:$color-text-b
          .pages
            font-size:$font-size-small
            p
              padding-top:$padding-small-s
    .footer-bottom
      border-top:4px solid #8496CA
      .footer-contant
        padding-top:$padding-medium
        font-size:$font-size-small
        .contant-us
          color:$color-text-b
          font-size:$font-size-medium
          margin-top:$margin-top
        .margin-top
          margin-top:$margin-top
      .banquan
        padding:$padding-medium 0 
        color:$color-text-g
        text-align:center
</style>