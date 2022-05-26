<template>
<div class="WetlandPark">
  <div class="WetlandPark_box">
    <div class="WetlandPark_box_for" v-for="(item,index) in List" :key="index">
      <div class="WetlandPark_box_for_left">
        <img :src="item.img" alt="">
      </div>
      <div class="WetlandPark_box_for_right">
        <div>
          <p>{{item.title}}</p>
          <p>{{item.date}}</p>
        </div>
        <div>{{item.text}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {reactive, toRefs} from "vue";
import img from "../assets/banner.png"
export default {
  name: "WetlandPark",
  setup(){
    const data = reactive({
      List:[
        {id:0,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，"},
        {id:1,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，"},
        {id:2,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，"},
        {id:3,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，"},
        {id:4,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，"},
        {id:5,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，"},
        {id:6,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，"},
        {id:7,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，"},
        {id:8,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，"},
        {id:9,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，"},
        {id:10,img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，"},
      ]
    })

    return{
      ...toRefs(data)
    }
  }
}
</script>

<style scoped lang="scss">
.WetlandPark{
  width: 100%;
  padding: 110px 310px 80px;
  background: #F8F9FB;
  .WetlandPark_box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .WetlandPark_box_for{
      width: 620px;
      height: 272px;
      background: #FFFFFF;
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 90px;
      .WetlandPark_box_for_left{
        width: 220px;
        height: 100%;
        position: relative;
        img{
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 280px;
        }
      }
      .WetlandPark_box_for_right{
        width: 310px;
        height: 100%;
        div:first-child{
          width: 100%;
          p:first-child{
            font-size: 16px;
            font-weight: 400;
            color: #333333;
          }
          p:last-child{
            font-size: 14px;
            font-weight: 400;
            color: #333333;
            padding: 13px 0 38px;
          }
        }
        div:last-child{
          font-size: 14px;
          font-weight: 400;
          color: #666666;
          line-height: 24px;
          overflow: hidden;
          white-space: normal;
          word-break: break-all;
          display: -webkit-box;/*将对象作为弹性伸缩盒子模型显示。*/
          -webkit-box-orient: vertical;/*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
          -webkit-line-clamp: 4;
        }
      }
    }
  }
}
</style>