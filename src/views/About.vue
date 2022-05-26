<template>
<div class="about">
  <div class="about_top">
    <div class="about_top_title">
      <p>公园简介</p>
      <p>Introduction to the park</p>
    </div>
    <div class="about_top_box">
      <div class="RotationChart" style="height: 100%">
        <div class="RotationChart_body" :style="{width:topList.length*100+'%',marginLeft:'-'+inner*100+'%'}">
          <div class="Routers" v-for="(item,index) in topList" :key="index" :style="{width:100/topList.length + '%'}">
            <div class="about_top_box_for">
              <div class="about_top_box_for_img">
                <img :src="item.imgUrl" alt="">
                <img :src="item.imgUrl1" alt="">
              </div>

              <div class="about_top_box_for_text">
                <div>
                  <p>{{item.title}}</p>
                  <p>{{item.titleY}}</p>
                </div>
                <div>{{item.text1}}</div>
                <div>{{item.text2}}</div>
              </div>
            </div>
          </div>
          <div class="RoutersLeft" @click="leftClick" :style="{bottom: '48px',left: '555px',background:inner === 0 ? '#EAEBF0':'#17C371'}"> ← </div>
          <div class="RoutersRight" @click="rightClick" :style="{bottom: '48px',left: '627px',background:inner+1 === topList.length ? '#EAEBF0':'#17C371'}"> → </div>
        </div>
      </div>
    </div>
  </div>
  <div class="about_bot">
    <div class="about_bot_top"></div>
    <div class="about_bot_bot"></div>
    <div class="about_bot_box">
      <div class="about_bot_box_left">
        <div class="about_bot_box_left_top">
          <p>视频简介</p>
          <p>Video introduction</p>
        </div>
        <div class="about_bot_box_left_bot">
          <div>
            <p>白鹈鹕</p>
            <p>Pelecanus onocrotalus</p>
          </div>
          <div>大型水禽，体长140-175厘米。体形粗短肥胖，颈细长。通体白色。嘴长而粗直，
            铅蓝色，嘴下有一橙黄色皮囊。


            繁殖羽头后部有一簇长而窄的白色冠羽。黑色的眼位于粉黄色的脸斑上极为醒目。
            胸有一簇黄色长的披针形羽毛。初级飞羽和次级飞羽内翈黑褐色，羽轴白色；
            次级飞羽外翈白色，有时亦延伸至内翈。</div>
        </div>
      </div>
      <div class="about_bot_box_right">
        <div></div>
        <div>
          <img :src="img" alt="">
          <img src="../assets/video.png" alt="">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {reactive, toRefs} from "vue";
import img from "../assets/banner.png";

export default {
  name: "About",
  setup(){
    const data = reactive({
      img:img,
      topList:[
        {id:0,imgUrl:img,imgUrl1:img,title:"清水河国家湿地公园",titleY:"Wetland Park",text1:"湿地公园是指以水为主体的公园。以湿地良好生态环境和多样化湿地景观资源为基础，以湿地的科普宣教、湿地功能利用、弘扬湿地文化等为主题，并建有一定规模的旅游休闲设施，可供人们旅游观光、休闲娱乐的生态型主题公园。",text2:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，地公园是落实国家湿地分级分类保护管理策略的一项具体措施，也是当前形势下维护和扩大湿地保护面积直接而行之有效的途径之一。"},
        {id:1,imgUrl:img,imgUrl1:img,title:"清水河国家湿地公园",titleY:"Wetland Park",text1:"湿地公园是指以水为主体的公园。以湿地良好生态环境和多样化湿地景观资源为基础，以湿地的科普宣教、湿地功能利用、弘扬湿地文化等为主题，并建有一定规模的旅游休闲设施，可供人们旅游观光、休闲娱乐的生态型主题公园。",text2:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，地公园是落实国家湿地分级分类保护管理策略的一项具体措施，也是当前形势下维护和扩大湿地保护面积直接而行之有效的途径之一。"},
        {id:2,imgUrl:img,imgUrl1:img,title:"清水河国家湿地公园",titleY:"Wetland Park",text1:"湿地公园是指以水为主体的公园。以湿地良好生态环境和多样化湿地景观资源为基础，以湿地的科普宣教、湿地功能利用、弘扬湿地文化等为主题，并建有一定规模的旅游休闲设施，可供人们旅游观光、休闲娱乐的生态型主题公园。",text2:"湿地公园具有湿地保护与利用、科普教育、湿地研究、生态观光、休闲娱乐等多种功能，是国家湿地保护体系的重要组成部分，地公园是落实国家湿地分级分类保护管理策略的一项具体措施，也是当前形势下维护和扩大湿地保护面积直接而行之有效的途径之一。"},
      ],
      inner:0,
    })

    function leftClick(){
      if(data.inner !== 0){
        data.inner--
      }
    }
    function rightClick(){
      if(data.inner < data.topList.length-1){
        data.inner++
      }
    }

    return{
      ...toRefs(data),
      leftClick,
      rightClick,
    }
  }
}
</script>

<style scoped lang="scss">
.about{
  width: 100%;
  .about_top{
    width: 100%;
    height: 1080px;
    padding: 110px 310px 290px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .about_top_title{
      width: 100%;
      p:first-child{
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }
      p:last-child{
        padding-top: 10px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
      }
    }
    .about_top_box{
      width: 100%;
      height: 548px;
      .about_top_box_for{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 0 48px 48px;
        .about_top_box_for_img{
          width: 650px;
          height: 100%;
          position: relative;
          img:first-child{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
          }
          img:nth-child(2){
            position: absolute;
            width: 450px;
            height: 350px;
            z-index: 0;
            left: -48px;
            bottom: -48px;
          }
        }


        .about_top_box_for_text{
          width: 505px;
          height: 100%;
          padding: 47px 0 90px;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
          div:first-child{
            width: 100%;
            p:first-child{
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #333333;
            }
            p:last-child{
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              padding-top: 8px;
            }
          }
          div:nth-child(2){
            width: 100%;
            font-size: 14px;
            font-weight: 400;
            color: #666666;
            overflow: hidden;
            white-space: normal;
            word-break: break-all;
            display: -webkit-box;/*将对象作为弹性伸缩盒子模型显示。*/
            -webkit-box-orient: vertical;/*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
            -webkit-line-clamp: 3;
            line-height: 30px;
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
            -webkit-line-clamp: 4;
            line-height: 30px;
          }
        }
      }
    }
  }

  .about_bot{
    width: 100%;
    position: relative;
    .about_bot_top{
      width: 100%;
      height: 275px;
      background: #fff;
    }
    .about_bot_bot{
      width: 100%;
      height: 550px;
      background: #F8F9FB;
    }
    .about_bot_box{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      padding: 20px 310px 180px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .about_bot_box_left{
        width: 505px;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        .about_bot_box_left_top{
          width: 100%;
          p:first-child{
            font-size: 30px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
          }
          p:last-child{
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            padding-top: 10px;
          }
        }
        .about_bot_box_left_bot{
          width: 100%;
          div:first-child{
            width: 100%;
            padding-bottom: 74px;
            p:first-child{
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #333333;
            }
            p:last-child{
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              padding-top: 8px;
            }
          }
          div:last-child{
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
          }
        }
      }
      .about_bot_box_right{
        width: 650px;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        div:first-child{
          width: 100%;
        }
        div:last-child{
          width: 100%;
          height: 470px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          img:first-child{
            width: 100%;
            height: 100%;
          }
          img:last-child{
            position: absolute;
            width: 80px;
            height: 50px;
          }
        }
      }
    }
  }

  .RotationChart{
    width: 100%;
    overflow: hidden;
    position: relative;
    .RotationChart_body{
      transition: all 0.8s ease;
      white-space: nowrap;
      height: 100%;
      .Routers{
        display: inline-block;
        height: 100%;
        position: relative;
      }
    }
    .RoutersTitle{
      position: absolute;
      left: 310px;
      top: 617px;
      font-size: 50px;
      color: #FFFFFF;
    }
    .RoutersText{
      position: absolute;
      left: 310px;
      top: 715px;
      font-size: 20px;
      color: #FFFFFF;
    }
    .RotationChart_body_dian{
      position: absolute;
      display: flex;
      align-items: center;
      p{
        width: 10px;
        height: 10px;
        background: #FFFFFF;
        opacity: 0.4;
        border-radius: 50%;
        margin-right: 16px;
      }
    }
    .RoutersLeft{
      position: absolute;
      z-index: 3;
      cursor: pointer;
      width: 70px;
      height: 70px;

      font-size: 30px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .RoutersRight{
      position: absolute;
      z-index: 3;
      cursor: pointer;
      width: 70px;
      height: 70px;
      font-size: 30px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>