<template>
  <div class="vobtn" @click="emitPlayEvent()">
    <div class="icon" :class="iconClass()"></div>
    <p class="text" :class="textClass()">{{itemText()}}</p>
  </div>
</template>

<script>
import { speakers } from "@/assets/data.js";
export default {
  props: ["vo", "side","voice","text"],
  data() {
    return {
      iconSize: 64
    }
  },
  methods:{
    emitPlayEvent(){
      var url = this.vo[this.voice=="voen"?"enurl":"jpurl"];
      console.log(url);
      this.$emit('playVO',url);
    },
    itemText(){
      return this.vo[this.text];
    },
    iconClass(){
      let result = {};
      result[this.vo.s.toLowerCase()] = true;
      return result;
    },
    textClass(){
      //站点完成时如果两个函数一致，则可以清理掉
      let result = {};
      result[this.vo.s.toLowerCase()] = true;
      return result;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .vobtn{
    border: 1px dashed red;
  }
  .icon {
    background-repeat: no-repeat;
    background-size: cover;
    width: 42px;
    height: 42px;
  }
  .text{
    padding: 8px;
    text-align: left;
  }
  /*charactor styles*/
  .trapper{
    &.icon{background-image: url("/static/trapper.png");}
    &.text{
      border:4px solid #5288c3;
      background-color: #afcfdf;
    }
  }
  .ninja{
    &.icon{background-image: url("/static/ninja.png");}
    &.text{
      border:4px solid #5288c3;
      background-color: #afcfdf;
    }
  }
  .warrior{
    &.icon{background-image: url("/static/warrior.png");}
    &.text{
      border:4px solid #5288c3;
      background-color: #afcfdf;
    }
  }
  .geisha{
    &.icon{background-image: url("/static/geisha.png");}
    &.text{
      border:4px solid #5288c3;
      background-color: #afcfdf;
    }
  }
  .alchemist{
    &.icon{background-image: url("/static/alchemist.png");}
    &.text{
      border:4px solid #5288c3;
      background-color: #afcfdf;
    }
  }
  .tanuki{
    &.icon{background-image: url("/static/tanuki.png");}
    &.text{
      border:4px solid #5288c3;
      background-color: #afcfdf;
    }
  }
    /*flex layout*/
  .vobtn{
    display: flex;
    align-items: flex-end;
    .icon{
      flex-grow: 1;
      flex-shrink: 0;
      }
    .text {
      flex-grow:0;
      flex-shrink: 1;
      }
  }

</style>
