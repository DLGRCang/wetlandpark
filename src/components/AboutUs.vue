<template>
<div class="about_us">
  <div class="about_us_left">
    <img src="../assets/aboutus.png" alt="">
    <div>
      <router-link v-for="(item,i) in headData" :key="i" :to="item.path">{{item.name}}</router-link>
    </div>
  </div>
  <div class="about_us_right">
    <div></div>
    <div>关注我们</div>
  </div>
</div>
</template>

<script>

import {reactive, toRefs} from "vue";

export default {
  name: "AboutUs",
  setup() {

    const data = reactive({
      headData: [
        {name: "首页", path: "/"},
        {name: "湿地公园", path: "/wetlandPark"},
        {name: "市场信息", path: "/marketInformation"},
        {name: "行业动态", path: "/industryDynamics"},
        {name: "关于我们", path: "/about"},
        {name: "联系我们", path: "/guestBook"}
      ]
    })


    return {
      ...toRefs(data)
    }
  }
}
</script>

<style scoped lang="scss">
.about_us{
  width: 100%;
  height: 250px;
  background: #282828;
  padding:0 310px;
  display: flex;
  justify-content: space-between;
  .about_us_left{
    padding-top: 58px;
    img:first-child{
      width: 279px;
      height: 30px;
    }
    div:last-child{
      display: flex;
      align-items: center;
      padding-top: 40px;
      a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        padding-right: 53px;
      }
    }
  }
  .about_us_right{
    padding-top: 69px;
    div:first-child{
      width: 115px;
      height: 115px;
      background: #FFFFFF;
    }
    div:last-child{
      text-align: center;
      padding-top: 13px;
      font-size: 14px;
      font-weight: 400;
      color: #666666;
    }
  }
}
</style>