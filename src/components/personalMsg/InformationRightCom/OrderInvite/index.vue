<template>
  <!-- 企划邀请com -->
  <div class="component">
    <el-menu
      default-active="0"
      class="el-menu-demo"
      mode="horizontal"
      @select="changeRoute"
    >
      <el-menu-item index="0">未处理</el-menu-item>
      <el-menu-item index="1">已拒绝</el-menu-item>
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
      label: "untreated",
      name: "未处理",
    },
    {
      label: "rejected",
      name: "已拒绝",
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