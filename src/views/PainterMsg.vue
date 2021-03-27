<template>
  <div class="component">
    <div class="leftCom"><InformationLeftCom /></div>
    <div class="rightCom"><InformationRightCom /></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InformationLeftCom from "@/components/personalMsg/InformationLeftCom/index.vue";
import InformationRightCom from "@/components/personalMsg/InformationRightCom/index.vue";
@Component({
  components: {
    InformationLeftCom,
    InformationRightCom,
  },
})
export default class PainterMsg extends Vue {}
</script>
<style lang="less" scoped>
.component {
  display: flex;
}
.leftCom {
  flex: 2.5;
  margin: 0 2%;
  background-color: #fff;
  height: 400px;
  border-radius: 10px;
  padding: 20px;
}
.rightCom {
  flex: 7.5;
  padding: 0 20px;
}
</style>