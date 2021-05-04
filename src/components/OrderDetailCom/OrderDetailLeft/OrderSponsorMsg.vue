<template>
  <div class="sponsorComponent" v-if="msgList.data">
    <div class="header">
      <img
        class="avatar"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        alt=""
      />
      <div class="userMsg">
        <div class="username">
          {{ msgList.data.user.nickName }}
        </div>
        <div class="finishTime">
          共成功约稿{{ msgList.data.user.getImgTime }}次
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="body">
      <div class="title">稿件预算</div>
      <div class="content">{{ msgList.data.order.money }}RMB</div>
      <div class="title">预计交稿时间</div>
      <div class="content">
        {{ msgList.data.order.limitTime.substr(0, 10) }}
      </div>
    </div>
    <el-divider></el-divider>
    <el-button type="primary" round plain>立即应稿</el-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class OrderSponsorMsg extends Vue {
  @Prop()
  private msgList!: Array<object>;
}
</script>

<style lang='less' scoped>
.el-divider--horizontal {
  margin: 12px 0;
}
.sponsorComponent {
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: block;
  .header {
    display: flex;
    .avatar {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
    .userMsg {
      line-height: 25px;
      margin-left: 20px;
      .username {
        font-weight: 800;
      }
      .finishTime {
        font-size: 14px;
        color: #666;
      }
    }
  }
  .body {
    text-align: left;
    .title {
      color: #666;
      font-size: 12px;
      line-height: 20px;
      height: 20px;
    }
    .content {
      margin-left: 40px;
      color: darkblue;
      font-weight: 600;
      font-size: 20px;
      height: 40px;
      line-height: 40px;
    }
  }
  .el-button {
    width: 200px;
    border-radius: 5px;
  }
}
</style>