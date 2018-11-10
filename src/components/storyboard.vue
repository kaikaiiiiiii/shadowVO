<template>
  <div class="section">
    <div id="storyMode">
      <div id="chapters">
        <div v-for="(item,index) in stories" :key="item.origin"
        class="chapter" :class="chapterClass(item)"
        @click="levelChange(item)">
          <div class="cover" :style="chapterCover(item)">{{index}}</div>
          <div class="title">{{item.name.CN||"post"}}</div>
        </div>
      </div>
      <div class="vo-board">
        <div class="board border">
          <div v-for="group in voToShow" :key="group.section" class="vo-block">
            <vobtn v-for="vo in group.list" :key="vo.vojp" class="vo-line"             @click="emitPlayEvent(vo)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { levels } from "@/assets/data.js";
import axios from "axios";
import vobtn from "@/components/vobtn.vue";

export default {
  props: ["volang","textlang"],
  components: {vobtn},
  data() {
    return {
      storylevel: levels,
      voList: [], //用户点击 level 后，新增的数据会追加到全列表中。
      libPath: "https://kaikaiiiiiii.github.io/shadowVO/static/",
      currentLevel: 0,
      cachedLevelData: [], //记录哪些关卡已经保存。
    };
  },
  computed: {
    stories() {
      return this.storylevel.sort((a, b) => {
        return a.order - b.order;
      });
    },
    voToShow(){
      let me = this;
      let levelVOs = this.voList.filter(vo => {
        return vo.level == me.currentLevel;
      });
      levelVOs.sort((a,b)=>{return a.sec - b.sec});
      let voGroups = levelVOs.reduce((base,add)=>{
        let createNewGroupFlag = true;
        for(let i=base.length-1;i>=0;i--){
          if (base[i].section == add.sec) {
            base[i].list.push(add);
            createNewGroupFlag = false;
            break;
          };
        };
        if(createNewGroupFlag){
          var newGroup = {};
          newGroup.section = add.sec;
          newGroup.list = [add];
          base.push(newGroup);
        }
        return base;
      },[]);
      return voGroups;
    }
  },
  methods: {
    emitPlayEvent(e){
      var url = e[this.volang=="voen"?"enurl":"jpurl"];
      this.$emit('playVO',url);
    },
    chapterClass(item) {
      let result = {};
      result["main"] = item.isChapter;
      result["inter"] = !item.isChapter;
      return result;
    },
    chapterCover(item) {
      let result = {};
      if (item.isChapter) {
        //result["background-image"] = "url(" + this.libPath + item.cover + ")";
      }
      return result;
    },
    itemText(vo){
      return vo[this.textlang];
    },
    levelChange(item) {
      this.currentLevel = item.order;
      if (!this.cachedLevelData.includes(item.order)) {
        let jsonDataUrl = this.libPath + item.order + ".json";
        let thisLoadingDataLevel = this.currentLevel
        let me = this;
        axios
          .get(jsonDataUrl)
          .then(res => {
            res.data.forEach(newline => {
              newline.level = thisLoadingDataLevel;
              if (newline.voen.length > 0) {
                newline.enurl = "https://k6i.github.io/SD" + newline.voen.split("_")[0] + "/" + newline.voen + ".mp3"
              }
              if (newline.vojp.length > 0) {
                newline.jpurl = "https://k6i.github.io/SD" + newline.vojp.split("_")[0] + "/" + newline.vojp + ".mp3"
                //vocs_firstcastle_intro_n03_jp => https://k6i.github.io/SDvocs/vocs_firstcastle_intro_n03_jp.mp3
              }
            });
            me.voList = me.voList.concat(res.data);
            me.cachedLevelData.push(thisLoadingDataLevel);
          })
          .catch(error => {
            console.log(error);
          });
      } 
    }
  },
  mounted(){
    this.levelChange({order:1});
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#storyMode {
  display: flex;
}
#chapters {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  .chapter {
    cursor: pointer;
    width: 240px;
    margin: 8px 0;
    background-color: #111;
    position: relative;
    overflow: hidden;
    &.main {
      height: 120px;
    }
    &.inter {
      height: 80px;
    }

    .cover {
      height: 100%;
      background-size: cover;
      color:#fff;
      font-size: 24px;
    }
    .title {
      position: absolute;
      background-color: #000;
      width: 100%;
      color: #efefef;
      bottom: -24px;
      height: 24px;
      transition: 0.2s;
    }
  }
  .chapter:hover {
    .title {
      bottom: 0px;
      transition: 0.2s;
    }
  }
}
.vo-board {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  .vo-block{
    display:flex;
    flex-direction: column;
    border: 1px solid #e9c567;
    margin-bottom: 12px;
    &:nth-child(even){align-items: flex-end;}
    &:nth-child(odd){align-items: flex-start;}
    .vo-line{
      cursor: pointer;
      border: 1px solid #3698f3;
      border-radius: 4px;
      margin: 4px 0;
      display: flex;
      .icon {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        background-color: rosybrown;
        border-radius: 100%;
        margin-right: 8px;
      }
      .subtitle{
        flex-shrink: 1;
        text-align: left;
      }
    }
  }
}
</style>
