<template>
  <div class="home">
      <Header></Header>
      <div class="main">
        <img src="@/assets/img/network.png" alt="">
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Network",
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

</style>