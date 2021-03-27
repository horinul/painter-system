<template>
  <!-- 我的企划com -->
  <div class="component">
    <el-menu
      default-active="0"
      class="el-menu-demo"
      mode="horizontal"
      @select="changeRoute"
    >
      <el-menu-item index="0">应稿中</el-menu-item>
      <el-menu-item index="1">未完成</el-menu-item>
      <el-menu-item index="2">已结算</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Schedult extends Vue {
  private menuList = [
    {
      label: "contributingOrder",
      name: "应稿中",
    },
    {
      label: "undoneOrder",
      name: "未完成",
    },
    {
      label: "settledOrder",
      name: "已结算",
    },
  ];
  private changeRoute(key) {
    this.$router.push("/" + this.menuList[key].label);
  }
}
</script>

<style lang='less' scoped>
.el-menu--horizontal > .el-menu-item {
  float: right;
}
</style>