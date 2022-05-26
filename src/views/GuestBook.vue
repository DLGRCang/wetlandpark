<template>
<div class="GuestBook">
  <div class="GuestBook_top">
    <div class="GuestBook_top_title">
      <p>用户留言</p>
      <p>guest book</p>
    </div>
    <div class="GuestBook_top_box">
      <div class="GuestBook_top_box_left">
        <div class="RotationChart" style="height: 100%">
          <div class="RotationChart_body" :style="{width:topListFor.length*100+'%',marginLeft:'-'+inner*100+'%'}">
            <div class="Routers" v-for="(item,index) in topListFor" :key="index" :style="{width:100/topListFor.length + '%'}">
              <div class="GuestBook_top_box_left_box">
                <div v-for="(items,index) in item" :key="index">
                  <p>{{items.text}}</p>
                  <p>{{items.title}}</p>
                </div>
              </div>
            </div>
            <div class="RoutersLeft" @click="leftClick" :style="{bottom: '0',left: '0',background:inner === 0 ? '#EAEBF0':'#17C371'}"> ← </div>
            <div class="RoutersRight" @click="rightClick" :style="{bottom: '0',left: '72px',background:inner+1 === topListFor.length ? '#EAEBF0':'#17C371'}"> → </div>
          </div>
        </div>
      </div>
      <div class="GuestBook_top_box_right">
        <div class="GuestBook_top_box_right_box">
          <div class="title">公司名称/姓名</div>
          <input type="text" placeholder="请输入您的公司名称/姓名">
        </div>
        <div class="GuestBook_top_box_right_box">
          <div class="title">联系方式</div>
          <input type="text" placeholder="请输入您的联系方式">
        </div>
        <div class="GuestBook_top_box_right_box">
          <div class="title">反馈留言</div>
          <textarea placeholder="请输入您要反馈的留言"></textarea>
        </div>
        <div class="GuestBook_top_box_right_btn">提交</div>
      </div>
    </div>
  </div>
  <div class="GuestBook_bot">
    <div class="GuestBook_bot_top">
      <p>联系我们</p>
      <p>contact us</p>
    </div>
    <div class="GuestBook_bot_bot">
      <div class="GuestBook_bot_bot_left">
        <div>
          <p>电话：</p>
          <p>0471-0000-0000</p>
        </div>
        <div>
          <p>传真：</p>
          <p>0471-0000-0000</p>
        </div>
        <div>
          <p>E-mail：</p>
          <p>aaaaaa112hduh@huwb.com</p>
        </div>
        <div>
          <p>公众号</p>
          <img src="" alt="二维码">
        </div>
      </div>
      <div class="GuestBook_bot_bot_right">
        <div class="GuestBook_bot_bot_right_top">
          <p>地址：</p>
          <p>内蒙古自治区呼和浩特市清水河国家湿地公园</p>
        </div>
        <div class="GuestBook_bot_bot_right_bot">

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {reactive, toRefs , onMounted} from "vue";
import img from "../assets/banner.png";

export default {
  name: "GuestBook",
  setup(){
    const data = reactive({
      img:img,
      topList:[
        {id:0,text:"湿地公园是指以水为主体的公园。以湿地良好生态环境和多样化湿地景观资源为基础，以湿地的科普宣教、湿地功能利用、弘扬湿地文化等为主题，并建有一定规模的旅游休闲设施，可供人们旅游观光、休闲娱乐的生态型主题公园",title:"——清水河国家湿地公园"},
        {id:1,text:"湿地公园是指以水为主体的公园。以湿地良好生态环境和多样化湿地景观资源为基础，以湿地的科普宣教、湿地功能利用、弘扬湿地文化等为主题，并建有一定规模的旅游休闲设施，可供人们旅游观光、休闲娱乐的生态型主题公园",title:"——清水河国家湿地公园"},
        {id:2,text:"湿地公园是指以水为主体的公园。以湿地良好生态环境和多样化湿地景观资源为基础，以湿地的科普宣教、湿地功能利用、弘扬湿地文化等为主题，并建有一定规模的旅游休闲设施，可供人们旅游观光、休闲娱乐的生态型主题公园",title:"——清水河国家湿地公园"},
        {id:3,text:"湿地公园是指以水为主体的公园。以湿地良好生态环境和多样化湿地景观资源为基础，以湿地的科普宣教、湿地功能利用、弘扬湿地文化等为主题，并建有一定规模的旅游休闲设施，可供人们旅游观光、休闲娱乐的生态型主题公园",title:"——清水河国家湿地公园"},
        {id:4,text:"湿地公园是指以水为主体的公园。以湿地良好生态环境和多样化湿地景观资源为基础，以湿地的科普宣教、湿地功能利用、弘扬湿地文化等为主题，并建有一定规模的旅游休闲设施，可供人们旅游观光、休闲娱乐的生态型主题公园",title:"——清水河国家湿地公园"},
      ],
      inner:0,
      topListFor:[]
    })

    onMounted(()=>{
      let v = 1
      let datas = []
      let length = data.topList.length
      for (let i in data.topList){
        if(v === 1){
          datas.push(data.topList[i])
          v++
          if(length === new Number(i)+1){
            data.topListFor.push(datas)
            datas = []
          }
        }else if(v === 2){
          datas.push(data.topList[i])
          v = 1
          data.topListFor.push(datas)
          datas = []
        }
      }
    console.log(data.topListFor)
    })

    function leftClick(){
      if(data.inner !== 0){
        data.inner--
      }
    }
    function rightClick(){
      if(data.inner < data.topListFor.length-1){
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
.GuestBook{
  width: 100%;
  .GuestBook_top{
    width: 100%;
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    padding: 110px 310px 140px;
    background: #F8F9FA;
    .GuestBook_top_title{
      width: 100%;
      p:first-child{
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }
      p:last-child{
        padding-top: 11px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
      }
    }
    .GuestBook_top_box{
      width: 100%;
      height: 610px;
      display: flex;
      align-items: self-start;
      justify-content: space-between;
      .GuestBook_top_box_left{
        width: 855px;
        height: 100%;
        .GuestBook_top_box_left_box{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 150px;
          div{
            width: 406px;
            height: 100%;
            background: #FFFFFF;
            padding: 70px 40px;
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            p:first-child{
              width: 100%;
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              overflow: hidden;
              white-space: normal;
              word-break: break-all;
              line-height: 30px;
            }
            p:last-child{
              width: 100%;
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
            }
          }
        }
      }
      .GuestBook_top_box_right{
        width: 406px;
        height: 460px;
        background: #FFFFFF;
        padding: 36px 38px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        .GuestBook_top_box_right_box{
          width: 100%;
          div:first-child{
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            padding-bottom: 13px;
          }
          input{
            width: 100%;
            height: 50px;
            background: #F7FAFB;
            border: 1px solid #DBDFE5;
            border-radius: 6px;
            outline: none;
            font-size: 14px;
            padding: 0 10px;
          }
          textarea{
            width: 100%;
            height: 90px;
            background: #F7FAFB;
            border: 1px solid #DBDFE5;
            border-radius: 6px;
            outline: none;
            padding: 10px;
            font-size: 14px;
          }
        }
        .GuestBook_top_box_right_btn{
          width: 100px;
          height: 40px;
          background: #17C371;
          border-radius: 6px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .GuestBook_bot{
    width: 100%;
    height: 1080px;
    background: #fff;
    padding: 106px 310px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .GuestBook_bot_top{
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
        padding-top: 13px;
      }
    }
    .GuestBook_bot_bot{
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      .GuestBook_bot_bot_left{
        width: 515px;
        height: 665px;
        padding: 30px 0;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        div{
          width: 100%;
          p:first-child{
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
          }
          p:last-child{
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            padding-top: 13px;
          }
          img{
            width: 120px;
            height: 120px;
          }
        }
      }
      .GuestBook_bot_bot_right{
        width: 781px;
        .GuestBook_bot_bot_right_top{
          width: 100%;
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 2px solid #eee;
          p:first-child{
            font-size: 14px;
            font-weight: 400;
            color: #333333;
          }
          p:last-child{
            font-size: 16px;
            font-weight: bold;
            color: #333333;
          }
        }
        .GuestBook_bot_bot_right_bot{
          width: 100%;
          height: 650px;
          background: black;
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
      z-index: 5;
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
      z-index: 5;
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