<template>
  <div class="component">
    <div class="leftCom"></div>
    <div class="rightCom">right</div>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class PainterMsg extends Vue {}
</script>
<style lang="less" scoped>
.component {
  display: flex;
}
.leftCom {
  flex: 3;
  margin: 0 5%;
}
.rightCom {
  flex: 7;
}
</style>