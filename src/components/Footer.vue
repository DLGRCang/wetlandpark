<template>
  <div class="footer">
    <p>技术支持：内蒙古成迈信息有限公司</p>
    <p>蒙ICP备180000000号-0</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
.footer{
  width: 100%;
  height: 59px;
  background: #282828;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 12px;
    font-weight: 400;
    color: #666666;
    padding: 0 25px;
  }
}
</style>