<template>
  <div class="home">
    <div class="RotationChart" style="height: 1000px">
      <div class="RotationChart_body" :style="{width:topList.length*100+'%',marginLeft:'-'+inner*100+'%'}">
              <div class="Routers" v-for="(item,index) in topList" :key="index" :style="{width:100/topList.length + '%'}">
                <img :src="item.imgUrl" alt="" style="width: 100%;height: 100%">
                <div class="RoutersTitle">{{item.title}}</div>
                <div class="RoutersText">—— {{item.text}}</div>
              </div>
        <div class="RotationChart_body_dian" style="left: 310px;bottom: 103px">
          <p v-for="(item,index) in topList" :key="index" :style="{opacity:inner === index ? '1':'0.4'}"></p>
        </div>
        <div class="RoutersLeft" @click="leftClick" style="bottom: 93px;right: 378px;border: 2px solid #FFFFFF;"> ← </div>
        <div class="RoutersRight" @click="rightClick" style="bottom: 93px;right: 310px;border: 2px solid #FFFFFF;"> → </div>
      </div>
    </div>

    <div class="home_box2">
        <div class="home_box2_top">
          <div>
            <p>热门文章</p>
            <p>Popular articles</p>
          </div>
          <div><span>查看更多</span><span>→</span></div>
        </div>
      <div class="RotationChart" style="height: 540px">
        <div class="RotationChart_body" :style="{width:box2List.length*100+'%',marginLeft:'-'+box2inner*100+'%'}">
          <div class="Routers" v-for="(item,index) in box2List" :key="index" :style="{width:100/box2List.length + '%'}">
              <div class="home_box2_box">
                <div class="home_box2_box_for" v-for="(items,index) in item.list" :key="index">
                  <img :src="items.img" alt="">
                  <div class="home_box2_box_for_bot">
                    <p>{{items.title}}</p>
                    <div>{{items.text}}</div>
                    <p>{{items.date}}</p>
                  </div>
                </div>
              </div>
          </div>
          <div class="RoutersLeft" @click="leftClickBox2" :style="{bottom: '0',left: '0',background:box2inner === 0 ? '#EAEBF0':'#17C371'}"> ← </div>
          <div class="RoutersRight" @click="rightClickBox2" :style="{bottom: '0',left: '72px',background:box2inner+1 === box2List.length ? '#EAEBF0':'#17C371'}"> → </div>
        </div>
      </div>
    </div>

    <div class="home_box3">
      <div class="RotationChart" style="height: 560px">
        <div class="RotationChart_body" :style="{width:box3List.length*100+'%',marginLeft:'-'+box3inner*100+'%'}">
          <div class="Routers" v-for="(item,index) in box3List" :key="index" :style="{width:100/box3List.length + '%'}">
            <div class="home_box3_body">
              <img :src="item.imgUrl" alt="">
              <img src="../assets/video.png" alt="" class="onVideo">
            </div>

          </div>
          <div class="RoutersLeft" @click="leftClickBox3" :style="{bottom: '0',right: '72px',background:box3inner === 0 ? '#EAEBF0':'#17C371'}"> ← </div>
          <div class="RoutersRight" @click="rightClickBox3" :style="{bottom: '0',right: '0',background:box3inner+1 === box3List.length ? '#EAEBF0':'#17C371'}"> → </div>
        </div>
      </div>
      <div class="home_box3_bot">
        <div class="home_box3_bot_left">
          <div>
            <p>精彩视频</p>
            <p>Wonderful video</p>
          </div>
          <div><span>查看更多</span><span>→</span></div>
        </div>
        <div class="home_box3_bot_right">
          <img src="../assets/banner.png" alt="">
          <img src="../assets/banner.png" alt="">
          <img src="../assets/banner.png" alt="">
        </div>
      </div>
    </div>

    <div class="RotationChart" style="height: 1080px;">
      <div class="RotationChart_body" :style="{width:box4List.length*100+'%',marginLeft:'-'+box4inner*100+'%'}">
        <div class="Routers" v-for="(item,index) in box4List" :key="index" :style="{width:100/box4List.length + '%'}">
            <div class="home_box4">
              <img :src="item.img" alt="">

              <div class="home_box4_body">
                <div class="home_box4_body_for"></div>
                <div class="home_box4_body_for" v-for="(items,index) in item.list" :key="index">
                  <div>
                    <p>{{items.title}}</p>
                    <p>{{items.date}}</p>
                  </div>
                  <div>{{items.text}}</div>
                </div>
              </div>
            </div>
        </div>
        <div class="home_box4_h">
          <div>市场信息</div>
          <div>Market information</div>
          <div><span>查看更多</span><span>→</span></div>
        </div>
        <div class="RoutersLeft" @click="leftClickBox4" :style="{bottom: '267px',right: '740px',background:box4inner === 0 ? '#EAEBF0':'#17C371'}"> ← </div>
        <div class="RoutersRight" @click="rightClickBox4" :style="{bottom: '267px',right: '668px',background:box4inner+1 === box4List.length ? '#EAEBF0':'#17C371'}"> → </div>
      </div>
    </div>


    <div class="home_box5">
      <div class="RotationChart" style="height: 100%;">
        <div class="RotationChart_body" :style="{width:box5List.length*100+'%',marginLeft:'-'+box5inner*100+'%'}">
          <div class="Routers" v-for="(item,index) in box5List" :key="index" :style="{width:100/box5List.length + '%'}">
            <div class="home_box5_body">
              <div class="home_box5_body_for"></div>
              <div class="home_box5_body_for" v-for="(items,index) in item.list" :key="index">
                <img :src="items.imgUrl" alt="">
                <div>
                  <p>{{items.title}}</p>
                  <p>{{items.date}}</p>
                </div>
              </div>
            </div>

          </div>
          <div class="home_box5_h">
            <div>行业动态</div>
            <div>Industry dynamics</div>
            <div><span>查看更多</span><span>→</span></div>
          </div>
          <div class="RoutersLeft" @click="leftClickBox5" :style="{top: '235px',left: '0',background:box5inner === 0 ? '#EAEBF0':'#17C371'}"> ← </div>
          <div class="RoutersRight" @click="rightClickBox5" :style="{top: '235px',left: '72px',background:box5inner+1 === box5List.length ? '#EAEBF0':'#17C371'}"> → </div>
        </div>
      </div>
    </div>


    <div class="home_box6">
      <div class="home_box6_top">
        <p>联系我们</p>
        <p>contact us</p>
      </div>
      <div class="home_box6_box">
        <div class="home_box6_box_top"></div>
        <div class="home_box6_box_bot">
          <p>地址：</p>
          <p>内蒙古自治区呼和浩特市清水河国家湿地公园</p>
        </div>
      </div>
      <div class="home_box6_bot">
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
          <p>0471-0000-0000</p>
        </div>
      </div>
    </div>
  </div>

</template>
<script lang="ts">
import {reactive, toRefs , onMounted ,getCurrentInstance} from "vue";
import img from "../assets/banner.png"
import box4 from "../assets/box4.png"
export default {

  setup() {
    const axios = getCurrentInstance()?.appContext.config.globalProperties.$axios
    const data = reactive({
      topList:[
        {id:0,imgUrl:img,title:"国家湿地公园",text:"不可错过的美景"},
        {id:1,imgUrl:img,title:"国家湿地公园1",text:"不可错过的美景"},
        {id:2,imgUrl:img,title:"国家湿地公园2",text:"不可错过的美景"}
      ],
      box2List:[
        {
          id:0,
          list:[
            {img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工在我国的不少地区，由政府主导，投巨资建设城市人工"},
            {img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工"},
            {img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工"}
          ]
        },
        {
          id:1,
          list:[
            {img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工"},
            {img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工"},
            {img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工"}
          ]
        },
        {
          id:2,
          list:[
            {img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工"},
            {img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工"},
            {img:img,title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工"}
          ]
        }
      ],
      box3List:[
        {id:0,imgUrl:img},
        {id:1,imgUrl:img},
        {id:2,imgUrl:img}
      ],
      box4List:[
        {id:0,img:box4,list:[
            {title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温政府热心湿地建设，应该说是好事"},
            {title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温政府热心湿地建设，应该说是好事"},
            {title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温政府热心湿地建设，应该说是好事"},
            {title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温政府热心湿地建设，应该说是好事"}
          ]},
        {id:1,img:box4,list:[{title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温政府热心湿地建设，应该说是好事"}]},
        {id:2,img:box4,list:[{title:"让湿地建设实至名归",date:"2020-12-13",text:"在我国的不少地区，由政府主导，投巨资建设城市人工湿地的现象日趋升温政府热心湿地建设，应该说是好事"}]}
      ],
      box5List:[
        {id:0,list:[
            {imgUrl:img,title:"大规模国土绿化行动持续推进",date:"2020-12-13"},
            {imgUrl:img,title:"大规模国土绿化行动持续推进",date:"2020-12-13"},
            {imgUrl:img,title:"大规模国土绿化行动持续推进",date:"2020-12-13"},
            {imgUrl:img,title:"大规模国土绿化行动持续推进",date:"2020-12-13"},
            {imgUrl:img,title:"大规模国土绿化行动持续推进",date:"2020-12-13"},
          ]},
        {id:1,list:[
            {imgUrl:img,title:"大规模国土绿化行动持续推进",date:"2020-12-13"},
            {imgUrl:img,title:"大规模国土绿化行动持续推进",date:"2020-12-13"},
            {imgUrl:img,title:"大规模国土绿化行动持续推进",date:"2020-12-13"},
          ]},
        {id:2,list:[
            {imgUrl:img,title:"大规模国土绿化行动持续推进",date:"2020-12-13"},
            {imgUrl:img,title:"大规模国土绿化行动持续推进",date:"2020-12-13"},
            {imgUrl:img,title:"大规模国土绿化行动持续推进",date:"2020-12-13"},
          ]}
      ],
      inner:0,
      box2inner:0,
      box3inner:0,
      box4inner:0,
      box5inner:0,
    })

    onMounted(()=>{
      axios.request({
        url: '/leave-message/listpage',
        method: 'get',
        //data: login
      }).then((res)=>{
        console.log(res)
      })
    })

    function leftClick(){
      if(data.inner === 0){
        data.inner = data.topList.length - 1
      }else {
        data.inner--
      }
    }
    function rightClick(){
      if((data.inner+1) === data.topList.length){
        data.inner = 0
      }else {
        data.inner++
      }
    }
    function leftClickBox2(){
      if(data.box2inner !== 0){
        data.box2inner--
      }
    }
    function rightClickBox2(){
      if(data.box2inner < data.box2List.length-1){
        data.box2inner++
      }
    }
    function leftClickBox3(){
      if(data.box3inner !== 0){
        data.box3inner--
      }
    }
    function rightClickBox3(){
      if(data.box3inner < data.box3List.length-1){
        data.box3inner++
      }
    }
    function leftClickBox4(){
      if(data.box4inner !== 0){
        data.box4inner--
      }
    }
    function rightClickBox4(){
      if(data.box4inner < data.box4List.length-1){
        data.box4inner++
      }
    }
    function leftClickBox5(){
      if(data.box5inner !== 0){
        data.box5inner--
      }
    }
    function rightClickBox5(){
      if(data.box5inner < data.box5List.length-1){
        data.box5inner++
      }
    }

    return{
      ...toRefs(data),
      leftClick,
      rightClick,
      leftClickBox2,
      rightClickBox2,
      leftClickBox3,
      rightClickBox3,
      leftClickBox4,
      rightClickBox4,
      leftClickBox5,
      rightClickBox5,
    }
  },
};
</script>

<style lang="scss">
.home{
  width: 100%;
  .home_box2{
    width: 100%;
    height: 1080px;
    background: #F8F8FA;
    padding: 134px 310px 237px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .home_box2_top{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div:first-child{
        p:first-child{
          font-size: 30px;
          color: #333333;
        }
        p:last-child{
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          padding-top: 10px;
        }
      }
      div:last-child{
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        cursor: pointer;
        span:last-child{
          padding-left: 5px;
        }
      }
    }
    .home_box2_box{
      width: 100%;
      height: 100%;
      padding-left: 220px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .home_box2_box_for{
        width: 330px;
        height: 100%;

        img:first-child{
          width: 100%;
          height: 330px;
        }
        .home_box2_box_for_bot{
          width: 100%;
          height: 210px;
          background: #fff;
          padding: 34px 30px;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
          p:first-child{
            width: 100%;
            font-size: 16px;
            font-weight: bold;
            color: #333333;
          }
          div:nth-child(2){
            width: 100%;
            font-size: 14px;
            font-weight: 400;
            color: #333333;
            overflow: hidden;
            white-space: normal;
            word-break: break-all;
            display: -webkit-box;/*将对象作为弹性伸缩盒子模型显示。*/
            -webkit-box-orient: vertical;/*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
            -webkit-line-clamp: 2;
          }
          p:last-child{
            width: 100%;
            font-size: 14px;
            font-weight: 400;
            color: #333333;
          }
        }
      }
    }
  }

  .home_box3{
    width: 100%;
    height: 1080px;
    background: #FFFFFF;
    padding: 110px 310px 100px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .home_box3_body{
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      img:first-child{
        width: 100%;
        height: 100%;
      }
      .onVideo{
        width: 80px;
        height: 50px;
        position: absolute;
        z-index: 2;

      }
    }
    .home_box3_bot{
      width: 100%;
      height: 190px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      .home_box3_bot_left{
        width: 125px;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        padding: 46px 0 12px;
        div:first-child{
          width: 100%;
          p:first-child{
            font-size: 30px;
            color: #333333;
          }
          p:last-child{
            padding-top: 10px;
            font-size: 14px;
            font-weight: 400;
            color: #333333;
          }
        }
        div:last-child{
          width: 100%;
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          cursor: pointer;
          span:last-child{
            padding-left: 3px;
          }
        }
      }
      .home_box3_bot_right{
        width: 940px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
          width: 284px;
          height: 100%;
        }
      }
    }
  }

  .home_box4{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    position: relative;
    img:first-child{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .home_box4_body{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      padding: 270px 310px;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      justify-content: space-between;
      .home_box4_body_for{
        width: 480px;
        height: 95px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        div:first-child{
          width: 100%;
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          p:last-child{
            padding-top: 8px;
          }
        }
        div:last-child{
          font-size: 14px;
          font-weight: 400;
          color: #666666;
          width: 100%;
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
  .home_box4_h{
    position: absolute;
    top: 240px;
    left: 310px;
    div:first-child{
      font-size: 30px;
      color: #333333;
    }
    div:nth-child(2){
      font-size: 14px;
      color: #333333;
      padding: 13px 0 54px;
    }
    div:last-child{
      font-size: 14px;
      font-weight: 400;
      color: #333333;
      cursor: pointer;
      span:last-child{
        padding-left: 3px;
      }
    }
  }
  .home_box5_h{
    position: absolute;
    top: 25px;
    left: 0;
    div:first-child{
      font-size: 30px;
      color: #333333;
    }
    div:nth-child(2){
      font-size: 14px;
      color: #333333;
      padding: 13px 0 54px;
    }
    div:last-child{
      font-size: 14px;
      font-weight: 400;
      color: #333333;
      cursor: pointer;
      span:last-child{
        padding-left: 3px;
      }
    }
  }

  .home_box5{
    width: 100%;
    height: 1080px;
    background: #fff;
    padding: 185px 310px;
    .home_box5_body{
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      justify-content: space-between;
      .home_box5_body_for{
        width: 400px;
        height: 310px;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        div{
          position: absolute;
          left: 20px;
          bottom: 30px;
          p:first-child{
            font-size: 16px;
            color: #FFFFFF;
          }
          p:last-child{
            padding-top: 9px;
            font-size: 14px;
            font-weight: 400;
            color: #FFFFFF;
          }
        }
      }
    }
  }

  .home_box6{
    width: 100%;
    height: 1080px;
    background: #FFFFFF;
    padding: 105px 310px 93px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .home_box6_top{
      width: 100%;
      p:first-child{
        font-size: 30px;
        color: #333333;
      }
      p:last-child{
        font-size: 14px;
        padding-top: 13px;
        color: #333333;
      }
    }
    .home_box6_box{
      width: 100%;
      height: 665px;
      .home_box6_box_top{
        width: 100%;
        height: 520px;
        background: black;
      }
      .home_box6_box_bot{
        height: 145px;
        width: 100%;
        padding: 0 33px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        p:first-child{
          width: 100%;
          font-size: 14px;
          color: #333333;
        }
        p:last-child{
          padding-top: 14px;
          width: 100%;
          font-size: 16px;
          font-weight: bold;
          color: #333333;
        }
      }
    }
    .home_box6_bot{
      width: 100%;
      padding:0 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div{
        p:first-child{
          font-size: 14px;
          color: #333333;
        }
        p:last-child{
          font-size: 16px;
          padding-top: 14px;
          font-weight: bold;
          color: #333333;
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