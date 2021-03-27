<template>
  <!-- 个人信息页（画师+用户）右侧界面总组件 -->
  <div class="rightComponent">
    <!-- router view -->
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class InformationRightCom extends Vue {}
</script>

<style lang='less' scoped>
</style>