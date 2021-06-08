<template>
  <!-- 我的企划com -->
  <div class="component">
    <el-menu
      :default-active="activeRouter"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
    >
      <el-menu-item index="contributingOrder" v-if="!isUser">应稿中</el-menu-item>
      <el-menu-item index="undoneOrder">未完成</el-menu-item>
      <el-menu-item index="settledOrder">已结算</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class MyOrder extends Vue {
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
  get activeRouter() {
    return this.$route.name || "";
  }
  private isUser(){
    return localStorage.getItem('isUser')==='true'
  }
}
</script>

<style lang='less' scoped>
.el-menu--horizontal > .el-menu-item {
  float: right;
}
</style>