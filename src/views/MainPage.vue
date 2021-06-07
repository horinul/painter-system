<template>
  <div class="home" :style="{ backgroundImage: 'url(' + coverImgUrl + ')' }">
   <slot></slot>
    <div class="title">画师约稿系统</div>
    <div class="text">轻松约稿，创作只属于你的精美画作</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class MainPage extends Vue {
  get test() {
    return 111;
  }
  private coverImgUrl = require("../static/bac0.jpg");
  private count = 0;
  private timer: any = null;
  private changeImg() {
    if (this.timer == null) {
      this.timer = setInterval(() => {
        this.coverImgUrl = require("../static/bac" + this.count + ".jpg");
        if (this.count === 2) {
          this.count = 0;
        } else {
          this.count += 1;
        }
      }, 4000);
    }
  }
  created() {
    clearInterval(this.timer);
    this.changeImg();
  }
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  // background-image: url("../static/bac.jpg");
  background-size: 100% 100%;
  overflow: hidden;
  text-align: center;
}
.linkBtn {
  cursor: pointer;
  color: #e5e5e5;
}
.title {
  color: #fff;
  font-size: 80px;
  font-weight: 100;
  margin-top: 12%;
}
.text {
  font-size: 20px;
  font-weight: 500;
  color: deepskyblue;
  margin-top: 2%;
}
</style>
