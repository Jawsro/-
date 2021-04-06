import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CompanyIntroduction from "../views/CompanyIntroduction.vue";
import News from "../views/News.vue";
import Products from "../views/Products.vue";
import Successfulcases from "../views/Successfulcases.vue";
import Technical from "../views/Technical.vue";
import Network from "../views/Network.vue";
import Order from "../views/Order.vue";
import ContactUs from "../views/ContactUs.vue";
import ContenDetail from "../views/ContenDetail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title:"首页"
    }
  },{
    path: "/companyintroduction",
    name: "CompanyIntroduction",
    component: CompanyIntroduction,
    meta:{
      title:"公司概况"
    }
  },{
    path: "/contendetail",
    name: "ContenDetail",
    component: ContenDetail,
    
  },
  {
    path: "/news",
    name: "News",
    component: News,
    meta:{
      title:"新闻中心",
    },
    
  },{
    path: "/products",
    name: "Products",
    component: Products,
    meta:{
      title:"产品中心"
    }
  },{
    path: "/case",
    name: "Successfulcases",
    component: Successfulcases,
    meta:{
      title:"成功案例"
    }
  },{
    path: "/technical",
    name: "Technical",
    component: Technical,
    meta:{
      title:"技术设备"
    }
  },{
    path: "/network",
    name: "Network",
    component: Network,
    meta:{
      title:"销售网络"
    }
  },{
    path: "/order",
    name: "Order",
    component: Order,
    meta:{
      title:"在线订购"
    }
  },{
    path: "/contactUs",
    name: "ContactUs",
    component: ContactUs,
    meta:{
      title:"联系我们"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
