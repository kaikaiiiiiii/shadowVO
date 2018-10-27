<template>
    <div id="app">
      <div class="container">
        <headernav />
        <router-view />
      </div>
    </div>
</template>

<script>
import headernav from '@/components/headernav.vue'
export default {
  components: {
    headernav
  }
}
</script>

<style scoped lang="less">

#app {
  .section {border:1px solid #fff}
  .container{
    max-width: 960px;
    width: 100%;
    margin:auto;
    }
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #121212;
  -webkit-font-smoothing : antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height             : 100%;
  position               : relative;
}
</style>
