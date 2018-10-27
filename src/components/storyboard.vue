<template>
  <div class="section">
    <div id="storyMode">
      <div id="chapters">
        <p>#chapters</p>
        <div v-for="item in stories" :key="item.origin"
        class="chapter" :class="chapterClass(item)">
          <div class="cover" :style="chapterCover(item)"></div>
          <div class="title">{{item.name.CN||"notext"}}</div>
        </div>
        <p>#chapters-end</p>
      </div>
      <div class="vo-board">#board with 2nd level route</div>
    </div>
  </div>
</template>

<script>
import {levels} from '@/components/data.js'
export default {
  data () {
    return {
      storylevel: levels,
    }
  },
  computed:{
    stories(){
      return this.storylevel.sort((a,b)=>{return a.order-b.order});
    }
  },
  methods:{
    chapterClass(item){
      let result={};
      result["main"]=item.isChapter;
      result["inter"]=!item.isChapter;
      return result;
    },
    chapterCover(item){
      let result = {};
      result["background-image"] = "url(http://kaikaiiiiiii.github.io/shadowVO/static/"+item.cover+")";
      return result;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#chapters{
  display:flex;
  flex-direction: column;
  .chapter{
    cursor: pointer;
    width:240px;
    margin: 8px 0;
    background-color: #111;
    position: relative;
    overflow: hidden;
    &.main{height: 120px;}
    &.inter{height: 80px;}

    .cover{
      height: 100%;
      background-size: cover;
    }
    .title{
      position: absolute;
      background-color: #000;
      width: 100%;
      color:#efefef;
      bottom:-24px;
      height: 24px;
      transition: 0.2s;
    }
  }
  .chapter:hover{
    .title{
      bottom: 0px;
      transition: 0.2s;
    }
  }
}

</style>
