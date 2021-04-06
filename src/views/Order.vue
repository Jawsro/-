<template>
  <div class="order">
      <Header></Header>
      <div class="main">
        <img src="@/assets/img/order.jpg" alt="">
        <div class="content">
          <el-row>
            <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" style="color: transparent;">1</el-col>
            <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14"> 
              <Breadcrumb :seconedNav='seconedNav'></Breadcrumb>
              <div class="form">
                <h3>在线订购</h3>
                <div class="forms">
                  <el-form 
                  :model="ruleForm" 
                  :rules="rules" 
                  ref="ruleForm" 
                  :label-position="labelPosition"
                  label-width="100px" 
                  class="demo-ruleForm">
                  <el-form-item label="主题" prop="subject" class='width1'>
                    <el-input v-model="ruleForm.subject"></el-input>
                  </el-form-item>

                  <el-form-item label="姓名" prop="username" class='width1'>
                    <el-input v-model="ruleForm.username"></el-input>
                  </el-form-item>

                  <el-form-item label="电话" prop="tel_num" class='width1'>
                    <el-input v-model="ruleForm.tel_num"></el-input>
                  </el-form-item>

                  <el-form-item label="邮箱" prop="email" class='width1'>
                    <el-input v-model="ruleForm.email"></el-input>
                  </el-form-item>

                  <el-form-item label="公司名称" prop="company_name" class='width2'>
                    <el-input v-model="ruleForm.company_name"></el-input>
                  </el-form-item>
                  
                  <el-form-item label="联系地址" prop="address" class='width2'>
                    <el-input v-model="ruleForm.address"></el-input>
                  </el-form-item>

                  <el-form-item label="订阅信息" prop="order_info" class='width2'>
                  <el-input type="textarea" v-model="ruleForm.order_info"></el-input>
                </el-form-item>

                  <div class="button">
                    <el-button type='primary '
                    @click="submitForm('ruleForm')"
                    size='medium' 
                    :disabled='btndisabled'>
                     提交
                    </el-button>
                  </div>
                </el-form>
                </div>
              </div>
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
import Breadcrumb from "@/components/Breadcrumb.vue";
import {setOrderForm} from "../assets/js/api.js";
export default {
  name: "Order",
  components: {
    Header,
    Footer,
    Breadcrumb,
  },
  data() {
    return {
      seconedNav:'',
      labelPosition: 'right',
      ruleForm:{
        subject:'',
        username:'',
        tel_num:'',
        email:'',
        company_name:'',
        address:'',
        order_info:''
      },
       rules:{
          subject: [
            { required: true, message: '请输入主题', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
          ],
          username:[
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          tel_num:[
            { required: true, message: '请输入电话', trigger: 'blur' }
          ],
          email:[
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ],
          company_name:[
            { required: true, message: '请输入联系地址', trigger: 'blur' }
          ],
          address:[
            { required: true, message: '请输入公司名称', trigger: 'blur' }
          ],
          order_info:[
            { required: true, message: '请输入订阅信息', trigger: 'blur' },
            { min:1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur' }
          ],
         
       },
        btndisabled:false
    };
  },  
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          
          let data={
            subject:this.ruleForm.subject,
            username:this.ruleForm.username,
            tel_num:this.ruleForm.tel_num,
            email:this.ruleForm.email,
            company_name:this.ruleForm.company_name,
            address:this.ruleForm.address,
            order_info:this.ruleForm.order_info
          };
          setOrderForm(data).then(res=>{
            
            if(res.status==true){
              this.btndisabled = true;
              alert(res.msg)
              setTimeout(()=>{
                location.reload();
              },3000)
            }
          })
        } else {
          return false;
        }
      });
    },
  }, 
};
</script>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
.main /deep/ .el-form-item__label
  font-size:$font-size-medium-x
.main /deep/ .width1 .el-input
  width:250px
.main /deep/ .width2 .el-textarea
  width:400px 
.main /deep/ .width2 .el-input
  width:400px 
.main /deep/ .el-button--primary
  background:$title-banckground
  border:none
.main
  .content
    margin:$padding-medium 0
    .form
      border:1px solid #ECECEC
      padding:$padding-medium 0 $padding-medium $padding-large 
      h3
        border-bottom:1px solid #ECECEC
        padding-bottom:$padding-small
      .forms
        width:70%
        margin:0 auto
        padding-top:$padding-medium
        .button
          text-align:center
</style>