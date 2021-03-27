<template>
  <div id="app">
    <el-container>
      <el-header>
        <router-link to="/painterMsg">painterMsg</router-link>
        <div>head</div>
      </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainPage from "@/views/MainPage.vue";
@Component({
  components: {
    MainPage,
  },
})
export default class App extends Vue {}
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #000;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #f0f8ff;
  color: #333;
  text-align: center;
  height: 650px;
}
</style>
