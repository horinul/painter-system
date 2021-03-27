<template>
  <!-- 企划邀请com -->
  <div class="component">
    <el-menu
      :default-active="activeRouter"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
    >
      <el-menu-item index="untreated">未处理</el-menu-item>
      <el-menu-item index="rejected">已拒绝</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class OrderInvite extends Vue {
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
  get activeRouter() {
    return this.$route.name || "";
  }
}
</script>

<style lang='less' scoped>
.el-menu {
  border-radius: 4px;
}
.el-menu--horizontal > .el-menu-item {
  float: right;
}
</style>