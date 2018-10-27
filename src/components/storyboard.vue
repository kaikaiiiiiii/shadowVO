<template>
  <div class="section">
    <div id="storyMode">
      <div id="chapters">
        <p>#chapters</p>
        <div v-for="item in storylevel" :key="item.origin"
        class="chapter" :class="chapterClass(item)">
          <div class="cover" :style="chapterCover(item)">#cover</div>
          <div class="title">{{item.name.CN}}</div>
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
  methods:{
    chapterClass(item){
      let result={};
      result["main"]=item.isChapter;
      return result;
    },
    chapterCover(item){
      let result = {};
      result["background-image"] = "url(\"static/"+item.cover+"\")";
      return result;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
