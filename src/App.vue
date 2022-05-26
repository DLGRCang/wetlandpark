<script lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import AboutUs from "./components/AboutUs.vue";
export default {
  name:"App",
  components: {AboutUs, Footer, Header}
}

</script>

<template>
  <div id="wetland_park">
    <Header/>
    <div style="padding-top: 80px">
      <router-view/>
      <AboutUs/>
      <Footer/>
    </div>

  </div>

</template>

<style>

</style>
