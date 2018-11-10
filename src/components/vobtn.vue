<template>
  <div class="vobtn">
    #vobtn
            <!--div v-for="vo in group.list" :key="vo.vojp" class="vo-line" 
            @click="emitPlayEvent(vo)">
              <div class="icon">{{vo.s}}</div>
              <p class="subtitle">{{itemText(vo)}}</p>
            </div-->
  </div>
</template>

<script>
import { levels } from "@/assets/data.js";

export default {
  props: [""],
  data() {
    return {
    }
  },
  methods:{

  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
