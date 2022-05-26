<template>
<div class="header">
  <img src="../assets/header.png" alt="">
  <div>
    <router-link v-for="(item,i) in headData" :key="i" :to="item.path" :style="path === item.path ? 'font-weight: bold;color: #333333':''">{{item.name}}</router-link>
  </div>
</div>
</template>

<script>
import {reactive,toRefs,onMounted,watch} from 'vue'
import {useRouter,useRoute,onBeforeRouteUpdate} from "vue-router"
export default {
  name: "Header",
  setup(){
    const router = useRouter()
    const route = useRoute()
    const data = reactive({
      headData:[
        {name:"首页",path:"/"},
        {name:"湿地公园",path:"/wetlandPark"},
        {name:"市场信息",path:"/marketInformation"},
        {name:"行业动态",path:"/industryDynamics"},
        {name:"关于我们",path:"/about"},
        {name:"联系我们",path:"/guestBook"}
      ],
      path:"/"
    })

    onMounted(()=>{
      data.path = router.currentRoute.value.path
    })

    watch(() => route.path,() => {
      data.path = router.currentRoute.value.path
    })

    return{
      ...toRefs(data)
    }
  }
}
</script>

<style scoped lang="scss">

.header{
  width: 100%;
  height: 80px;
  background: #fff;
  padding: 0 310px 0 305px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  img:first-child{
    width: 246px;
    height: 38px;
  }
  div:last-child{
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      color: #777777;
      margin-left: 83px;
    }
  }
}
</style>