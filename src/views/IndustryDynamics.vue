<template>
  <div class="MarketInformation">
    <div class="MarketInformation_for" v-for="(item,index) in list" :key="index">
      <img :src="item.img" alt="">
      <div class="MarketInformation_for_box">
        <div><p>{{item.title}}</p><p>{{item.date}}</p></div>
        <div>{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";
import img from "../assets/banner.png";

export default {
  name: "IndustryDynamics",
  setup(){
    const data = reactive({
      list:[
        {id:0,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温"},
        {id:0,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温"},
        {id:0,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温"},
        {id:0,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温"},
        {id:0,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温"},
        {id:0,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温"},
        {id:0,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温"},
        {id:0,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温"},
        {id:0,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温"},
      ]
    })


    return{
      ...toRefs(data)
    }
  }
}
</script>

<style scoped lang="scss">
.MarketInformation{
  width: 100%;
  padding: 60px 310px;
  background: #F8F9FA;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
  .MarketInformation_for{
    width: 400px;
    margin-bottom: 50px;
    img:first-child{
      width: 100%;
      height: 260px;
    }
    .MarketInformation_for_box{
      height: 155px;
      background: #FFFFFF;
      padding:25px;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      div:first-child{
        width: 100%;
        p:first-child{
          width: 100%;
          font-size: 16px;
          font-weight: 400;
          color: #333333;
        }
        p:last-child{
          padding-top: 9px;
          font-size: 14px;
          font-weight: 400;
          color: #333333;
        }
      }
      div:last-child{
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        overflow: hidden;
        white-space: normal;
        word-break: break-all;
        display: -webkit-box;/*将对象作为弹性伸缩盒子模型显示。*/
        -webkit-box-orient: vertical;/*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>