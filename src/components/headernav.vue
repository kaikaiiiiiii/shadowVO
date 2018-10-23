<template>
  <div class="section">
    <div id="modeSelect">
      <div v-for="item in mode" :key="item" @click="modeswitch(item)"
      class="btn mode">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mode: [
        "story",
        "event",
        "bgm"
      ],
    }
  },
  methods:{
    modeswitch(item){
      console.log(item);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.btn{
    cursor: pointer;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
