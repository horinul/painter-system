<template>
  <!-- 个人信息页（画师加+用户）信息页左侧总组件 -->
  <div class="leftComponent">
    <div class="msgTitle">
      <el-avatar
        :size="60"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <span class="identifyText">{{ identifyText }}</span>
      <THTag class="identifyTag" :showClose="false">{{ identifyTag }}</THTag>
    </div>
    <el-divider></el-divider>
    <div class="msgLink">
      <div
        :class="['link', item.selected ? 'linkFocus' : '']"
        v-for="(item, index) in linkObj"
        :key="index"
        @click="toRoute(item)"
      >
        <img :src="item.src" alt="" class="linkIcon" />
        <span class="linkText">{{ item.name }}</span>
      </div>
    </div>
    <el-divider></el-divider>
    <schedule />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import schedule from "@/components/personalMsg/InformationLeftCom/Schedule.vue";
@Component({
  components: {
    schedule,
  },
})
export default class InformationLeftCom extends Vue {
  private identifyText: String = "我是画师";
  private identifyTag: String = "认证画师";
  private linkObj = {
    myOrder: {
      label: "myOrder",
      name: "我的企划",
      src: require("../../../assets/myOrder.png"),
      selected: false,
      children: ["contributingOrder", "settledOrder", "undoneOrder"],
    },
    orderInvite: {
      label: "orderInvite",
      name: "企划邀请",
      src: require("../../../assets/orderInvite.png"),
      selected: false,
      children: ["untreated", "rejected"],
    },
    msgList: {
      label: "msgList",
      name: "消息列表",
      src: require("../../../assets/msgList.png"),
      selected: false,
      children: [],
    },
  };
  created() {
    for (let item in this.linkObj) {
      if (this.linkObj[item].children.includes(this.$route.name)) {
        this.linkObj[item].selected = true;
      }
    }
  }
  private toRoute(item) {
    this.$router.push(item.label);
    for (let item in this.linkObj) {
      this.linkObj[item].selected = false;
    }
    item.selected = true;
  }
}
</script>

<style lang='less' scoped>
.el-divider--horizontal {
  margin: 12px 0;
}
.msgTitle {
  display: flex;
  align-content: center;
  height: 60px;
  line-height: 60px;
  .identifyText {
    margin-left: 20px;
    font-size: 18px;
    font-weight: 800;
  }
  .identifyTag {
    margin-left: 20px;
    margin-top: 22px;
  }
}
.msgLink {
  text-align: left;
  margin: 0 10%;
  .linkIcon {
    height: 20px;
    width: 20px;
    padding-right: 20px;
    display: inline-block;
    vertical-align: middle;
  }
  .link {
    padding-top: 8px;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
  }
  .link:hover {
    color: #483d8b;
  }
  .linkFocus {
    font-weight: 800;
  }
}
</style>