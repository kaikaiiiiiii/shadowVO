<template>
    <div class="section">
      <div id="mode-line">
        <div v-for="item in mode" :key="item" class="mode"
        @click="boardRolling(item)">{{item}}</div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      mode: [
        "story",
        "charactor",
        "music",
        "video"
      ]
    }
  },
  methods:{
    boardRolling(e){
      this.$router.push(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

#mode-line{
  display: flex;
  width: 100%;
  border: 1px solid red;
  .mode{
    flex-grow: 1;
    cursor: pointer;
    border: 1px solid #fff;
  }
}

</style>
