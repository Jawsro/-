<template>
    <div class='content-detail'>
      <Header></Header> 
      <div class='main'>
        <div class="banner">
          <img src="@/assets/img/news.jpg" alt="">
        </div>
        <div class='content'>
          <el-row>
          <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
          <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
            <div v-html='value'></div>
          </el-col>
        
          <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
        </el-row>
        </div>
      </div>
      <Footer></Footer>
      </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import {getNewsDetail} from "../assets/js/api.js";
export default {
  name: "ContenDetail",
  components: {
    Header,
    Footer
  },
  data(){
    return{
      value:'11111111111',
      id:0
    }
  },
  created(){
    this.id = this.$route.query.id;
    this._getNewsDetail(this.id)
  },
  methods:{
    _getNewsDetail(id){
      let data={
        id
      }
      getNewsDetail(data).then(res =>{
        if(res.status ==true){
          this.value = res.data.content
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
.content
  padding 30px 0
</style>