<template>
    <div class="section">
      <div id="player" @click="test"></div>
      <div id="langBar">
        <div class="langselector text">
        <div v-for="item in textLang" :key="item.code" @click="changeTextLang(item)" class="btn" :class="langBarBtnClass(item)">
          {{item.text}}
        </div>
        </div>
        <div class="langselector vo">
        <div v-for="item in voLang" :key="item.code" @click="changeVOLang(item)" class="btn" :class="langBarBtnClass(item)">
          {{item.text}}
        </div>
        </div>
      </div>
      <div id="mode-line">
        <div v-for="(item,index) in mode" :key="item" class="mode"
        @click="boardRolling(item,index)">{{item}}</div>
      </div>
    </div>
</template>

<script>
import {modes, languages, voices} from '@/assets/data.js'

export default {
  data () {
    return {
      mode: modes,
      textLang: languages,
      voLang: voices,
      currentTextLang: "cn",
      currentVOLang: "vojp",
      currentModeIndex: 0
    }
  },
  methods:{
    routeChange(){
      var path = "/" + this.currentVOLang + "/" + this.currentTextLang + "/" + this.mode[this.currentModeIndex];
      this.$router.push(path);
    },
    boardRolling(e,i){
      this.currentModeIndex = i;
      this.routeChange();
    },
    changeVOLang(e){
      this.currentVOLang = e.code;
      this.routeChange();
    },
    changeTextLang(e){
      this.currentTextLang = e.code;
      this.routeChange();
    },
    langBarBtnClass(e){
      let result = {"active": false};
      if (e.code == this.currentTextLang && e.code.length ==2){result.active = true;}
      if (e.code == this.currentVOLang && e.code.length ==4){result.active = true;}
      return result;
    },
    test(){
      var src="https://k6i.github.io/SDvocs/vocs_snowcity_tower_n00_jp.mp3";
      this.$emit('playVO',src);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#player{
  display: block;
  height: 100px;
  margin-bottom: 100px;
  background-color: #000;
}

#langBar{
  display: flex;
  margin: 10px 0;
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
