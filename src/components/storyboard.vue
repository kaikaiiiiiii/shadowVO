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
            <div v-for="voline in voList" :key="voline.voen">
              {{voline.cn}}
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
      voList: [],
      libPath: "https://kaikaiiiiiii.github.io/shadowVO/static/",
      currentLevel: 0,
      cachedLevelData: []
    };
  },
  computed: {
    stories() {
      return this.storylevel.sort((a, b) => {
        return a.order - b.order;
      });
    },
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
      if (item.order != this.currentLevel && !this.cachedLevelData.includes(item.order)) {
        this.currentLevel = item.order;
        let jsonData = this.libPath + item.order + ".json";
        let thisLoadingDataLevel = this.currentLevel
        let me = this;
        axios
          .get(jsonData)
          .then(res => {
            res.data.forEach(element => {
              element.level = thisLoadingDataLevel;
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
