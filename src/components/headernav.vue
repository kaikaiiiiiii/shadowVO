<template>
    <div class="section">
      <div id="player" @click="test"></div>
      <div id="mode-line">
        <div v-for="item in mode" :key="item" class="mode"
        @click="boardRolling(item)">{{item}}</div>
      </div>
    </div>
</template>

<script>
import {modes, languages, voices} from '@/components/data.js'

export default {
  data () {
    return {
      mode: modes,
      player: new Audio(),
      textLang: languages,
      voLang: voices
    }
  },
  methods:{
    boardRolling(e){
      this.$router.push(e);
    },
    test(){
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#player{
  display: block;
  height: 100px;
  background-color: #000;
}

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
