<template>
  <div class="signUpPrinterListCom">
    <div class="header">
      <span>应稿画师</span>
      <span>共10人</span>
    </div>
    <div class="body">
      <div class="msgItem" v-for="(item, index) in painterList" :key="index">
        <img :src="item.avatar" class="avatar" alt="" />
        <div class="painterMsg">
          <div class="username">{{ item.name }}</div>
          <el-rate v-model="item.rate" :disabled="true"></el-rate>
        </div>
        <div class="finishTimes">共{{ item.finishTimes }}次成功约稿</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class SignUpPrinterList extends Vue {
  @Prop()
  private msgList!: Array<object>;

  private painterList = [
    {
      avatar:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "111",
      rate: 1,
      finishTimes: 5,
    },
    {
      avatar:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "222",
      rate: 2,
      finishTimes: 5,
    },
    {
      avatar:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "333",
      rate: 3,
      finishTimes: 5,
    },
    {
      avatar:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "111",
      rate: 1,
      finishTimes: 5,
    },
    {
      avatar:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "555",
      rate: 1,
      finishTimes: 5,
    },
    {
      avatar:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "111",
      rate: 1,
      finishTimes: 5,
    },
    {
      avatar:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "666",
      rate: 5,
      finishTimes: 5,
    },
    {
      avatar:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "111",
      rate: 1,
      finishTimes: 5,
    },
    {
      avatar:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "111",
      rate: 1,
      finishTimes: 5,
    },
    {
      avatar:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "111",
      rate: 1,
      finishTimes: 5,
    },
  ];
  // created() {
  //   this.getList();
  // }
  // private async getList() {
  //   let res = await UserService.userContributing();
  //   this.listMsg = (res.data as any).data.orderList;
  // }
}
</script>

<style lang='less' scoped>
.signUpPrinterListCom {
  border-radius: 10px;
  background-color: #fff;
  margin-top: 20px;
  position: relative;
  .header {
    font-size: 14px;
    color: #666;
    display: flex;
    justify-content: space-between;
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    top: 0;
    height: 20px;
    padding: 20px;
    z-index: 1;
  }
  .body {
    height: 250px;
    overflow: auto;
    padding: 20px;
    .msgItem:first-child {
      margin-top: 30px;
    }
    .msgItem {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      .avatar {
        height: 35px;
        width: 35px;
      }
      .painterMsg {
        text-align: left;
      }
      .finishTimes {
        font-size: 12px;
        color: #666;
        line-height: 40px;
      }
    }
  }
}
</style>