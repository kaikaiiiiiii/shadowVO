<template>
  <div class="section">
    <div id="storyMode">
      <div id="chapters">
        <div v-for="item in stories" :key="item.origin"
        class="chapter" :class="chapterClass(item)"
        @click="levelChange(item)">
          <div class="cover" :style="chapterCover(item)"></div>
          <div class="title">{{item.name.CN||"notext"}}</div>
        </div>
      </div>
      <div class="vo-board">
        <p>#board with 2nd level route</p>
        <div class="board border">
            <div v-for="group in voToShow" :key="group.section" class="vo-block">
              <div v-for="vo in group.list" :key="vo.vojp" class="voline">
                {{vo.cn}}
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { levels } from "@/components/data.js";
import axios from "axios";

export default {
  data() {
    return {
      storylevel: levels,
      voList: [], //用户点击 level 后，新增的数据会追加到全列表中。
      libPath: "https://kaikaiiiiiii.github.io/shadowVO/static/",
      currentLevel: 0,
      cachedLevelData: [] //记录哪些关卡已经保存。
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
    chapterClass(item) {
      let result = {};
      result["main"] = item.isChapter;
      result["inter"] = !item.isChapter;
      return result;
    },
    chapterCover(item) {
      let result = {};
      if (item.isChapter) {
        result["background-image"] = "url(" + this.libPath + item.cover + ")";
      }
      return result;
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
}
</style>
