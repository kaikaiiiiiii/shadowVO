<template>
    <div class="section">
      <div id="player" @click="test"></div>
      <div id="langBar">
        <div class="langselector text">
        #textLangSelector:{{currentTextLang}}
        <div v-for="item in textLang" :key="item.code" @click="changeTextLang(item)" class="btn" :class="langBarBtnClass(item)">
          {{item.text}}
        </div>
        </div>
        <div class="langselector vo">
        #voLangSelector:{{currentVOLang}}
        <div v-for="item in voLang" :key="item.code" @click="changeVOLang(item)" class="btn" :class="langBarBtnClass(item)">
          {{item.text}}
        </div>
        </div>
      </div>
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
      voLang: voices,
      currentTextLang: "cn",
      currentVOLang: "vojp"
    }
  },
  methods:{
    boardRolling(e){
      this.$router.push(e);
    },
    changeVOLang(e){
      this.currentVOLang = e.code;
    },
    changeTextLang(e){
      this.currentTextLang = e.code;
    },
    langBarBtnClass(e){
      let result = {"active": false};
      if (e.code == this.currentTextLang && e.code.length ==2){result.active = true;}
      if (e.code == this.currentVOLang && e.code.length ==4){result.active = true;}
      return result;
    },
    test(){
      console.log("play");
      this.player.src="https://k6i.github.io/SDvocs/vocs_ricefields_post_n17_jp.mp3";
      this.player.src="https://k6i.github.io/SDvocs/vocs_snowcity_tower_n00_jp.mp3";
      this.player.play();
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

#langBar{
  display: flex;
  justify-content: space-between;
  .langselector{
    display: flex;
    cursor: pointer;
    &.text{justify-content: flex-start}
    &.vo{justify-content: flex-end}
  }
  .btn {
    border: 1px solid red;
    border-radius: 4px;
    margin: 0 4px;
  }
  .btn.active {
    color: #fff;
    background-color: #f00;
  }
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
