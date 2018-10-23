<template>
    <div id="app">
      <headernav />
      <router-view/>
    </div>
</template>

<script>
import headernav from '@/components/headernav.vue'
export default {
  name: 'App',
  components: {
    headernav
  }
}
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("/static/demoendscreen_00.png");
  background-position    : bottom;
  background-repeat      : no-repeat;
  background-size        : cover;
  -webkit-font-smoothing : antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height             : 100%;
  position               : relative;
}
</style>
