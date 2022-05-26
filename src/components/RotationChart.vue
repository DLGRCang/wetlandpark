<template>
  <div class="RotationChart" :style="{height:height+'px'}">
    <div class="RotationChart_body" :style="{width:list*100+'vw',marginLeft:'-'+inner*100+'vw',height:height+'px'}">
<!--      <div class="Routers" v-for="(item,index) in list">{{index}}</div>-->
<!--      <div class="RoutersLeft" @click="leftClick"> ← </div>-->
<!--      <div class="RoutersRight" @click="rightClick"> → </div>-->
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
export default {
  name: "RotationChart",
  props: {
    list: {
      type: Number,
      default: 0
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3
    },
    height: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const data = reactive({
      //list:5,
      inner:0
    })

    function leftClick(){
      if(data.inner === 0){
        data.inner = props.list - 1
      }else {
        data.inner--
      }
    }
    function rightClick(){
      if((data.inner+1) === props.list){
        data.inner = 0
      }else {
        data.inner++
      }
    }

    return {
      ...toRefs(data),
      leftClick,
      rightClick
    }
  }
}
</script>

<style scoped lang="scss">
.RotationChart{
  width: 100%;
  //overflow: hidden;
  position: relative;
  .RotationChart_body{
    transition: all 0.8s ease;
    white-space: nowrap;
  }
  .RoutersLeft{
    position: absolute;
    left: 0;
    top: 50%;
    cursor: pointer;
  }
  .RoutersRight{
    position: absolute;
    right: 0;
    top: 50%;
    cursor: pointer;
  }

}
</style>