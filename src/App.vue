<template>
  <div id="app">
    <el-container>
      <el-header>
        <div>
          <router-link to="/" tag="span" class="title">
            画师约稿系统
          </router-link>
        </div>
        <div>
          <router-link to="/login" tag="span" class="linkBtn" v-if="!token"
            >登录</router-link
          >
          <span @click="removeLogin" v-if="token" class="linkBtn"
            >退出登录</span
          >
          <router-link
            to="/personalMsg"
            style="margin-left: 20px"
            tag="span"
            class="linkBtn"
            v-if="token"
          >
            个人信息
          </router-link>
          <router-link
            to="/changemsg"
            style="margin-left: 20px"
            tag="span"
            class="linkBtn"
            v-if="token"
          >
            修改个人信息
          </router-link>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>2021.5 @1.0.0</el-footer>
    </el-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MainPage from "@/views/MainPage.vue";
@Component({
  components: {
    MainPage,
  },
})
export default class App extends Vue {
  private token = localStorage.getItem("loginToken");
  private isMainPage = true;

  created() {
    if (this.$route.name === "MainPage") {
      this.isMainPage = true;
    }
    this.token = localStorage.getItem("loginToken");
  }

  private removeLogin() {
    localStorage.removeItem("loginToken");
    this.token = localStorage.getItem("loginToken");
    this.$store.commit("setLoginToken", "");
    this.$router.push("/");
  }
  @Watch("$route")
  private changeRoute(oldVal, newVal) {
    this.token = localStorage.getItem("loginToken");
  }
}
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #000;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  justify-content: space-between;
  display: flex;
  .title {
    font-size: 24px;
    font-weight: 600;
    color: dodgerblue;
    cursor: pointer;
  }
}
.el-main {
  background-color: #f0f8ff;
  color: #333;
  text-align: center;
  height: 85vh;
  padding: 0;
}
.linkBtn {
  cursor: pointer;
  color: #e5e5e5;
}
</style>
