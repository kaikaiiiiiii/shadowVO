<template>
  <div class="section">
    <div id="storyMode">
      <div id="chapters">
        <div v-for="item in stories" :key="item.origin" class="chapter" :class="chapterClass(item)" @click="levelChange(item)">
          <div class="cover" :style="chapterCover(item)"></div>
          <div class="title">{{item.name.CN||"post"}}</div>
        </div>
      </div>
      <div class="vo-board">
        <div class="board border">
          <div v-for="(group,gindex) in voToShow" :key="group.section" class="vo-block">
            <vobtn v-for="item in group.list" :key="item.vojp" :side="gindex" :vo="item" :voice="volang" :text="textlang"
            class="vo-line" @playVO="playSound"></vobtn>
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
      player: new Audio()
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
    playSound(url){
      this.player.src=url;
      this.player.play();
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
        result["position"]="relative";
        result["background-repeat"]="no-repeat";
        result["background-image"]="url(\"https://kaikaiiiiiii.github.io/shadowVO/static/levelsbg.jpg\")";
        var positionY = item.order < 18 ? -128*(item.order-1)/2 : -128*item.order/2 ;
        result["background-position-y"] = positionY+"px";
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
    position: relative;
    width: 256px;
    margin: 0 0 8px;
    background-color: #111;
    overflow: hidden;
    &.main {
      height: 128px;
    }
    &.inter {
      height: 80px;
    }

    .cover {
      height: 100%;
      color:#fff;
      font-size: 24px;
    }
    .title {
      position: absolute;
      background-color: rgba(0,0,0,0.25);
      width: 100%;
      color: #efefef;
      bottom: 0px;
      height: 28px;
      transition: 0.5s;
    }
  }
  /*.chapter:hover {
    .title {
      position: absolute;
      bottom: -28px;
      transition: 0.5s;
    }
  }*/
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
