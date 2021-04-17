<template>
  <!-- 个人信息页（画师加+用户）信息页左侧总组件 -->
  <div class="leftComponent">
    <div class="msgTitle">
      <el-avatar
        :size="60"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <span class="identifyText">{{ identifyText }}</span>
      <THTag class="identifyTag" :showClose="false" v-if="!isUser">{{
        identifyTag
      }}</THTag>
    </div>
    <el-divider></el-divider>
    <div class="msgLink">
      <div
        :class="[
          'link',
          item.selected ? 'linkFocus' : '',
          item.show ? '' : 'linkHidden',
        ]"
        v-for="(item, index) in linkObj"
        :key="index"
        @click="toRoute(item)"
      >
        <img :src="item.src" alt="" class="linkIcon" />
        <span class="linkText">{{ item.name }}</span>
      </div>
    </div>
    <el-divider v-if="!isUser"></el-divider>
    <schedule v-if="!isUser" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import schedule from "@/components/personalMsg/InformationLeftCom/Schedule.vue";
import { identify } from "@/enums/allUserEnums";
@Component({
  components: {
    schedule,
  },
})
export default class InformationLeftCom extends Vue {
  private identifyText: String = "我是画师";
  private identifyTag: String = "认证画师";
  private identify: identify = identify.printer;

  private linkObj = {
    myOrder: {
      label: "myOrder",
      name: "我的企划",
      src: require("../../../static/myOrder.png"),
      selected: false,
      children: ["contributingOrder", "settledOrder", "undoneOrder"],
      show: true,
    },
    orderInvite: {
      label: "orderInvite",
      name: "企划邀请",
      src: require("../../../static/orderInvite.png"),
      selected: false,
      children: ["untreated", "rejected"],
      show: !this.isUser,
    },
    msgList: {
      label: "msgList",
      name: "消息列表",
      src: require("../../../static/msgList.png"),
      selected: false,
      children: [],
      show: true,
    },
  };

  created() {
    for (let item in this.linkObj) {
      if (this.linkObj[item].children.includes(this.$route.name)) {
        this.linkObj[item].selected = true;
      }
    }
  }
  get isUser() {
    return this.identify === identify.user;
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
.linkHidden {
  display: none !important;
}
</style>