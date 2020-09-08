<template>
  <div id="app">
    <slider></slider>
  </div>
</template>

<script>
import slider from './components/slider.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    slider
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
