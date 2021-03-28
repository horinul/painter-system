<template>
  <div class="orderDetailRightComponent">
    <div class="header">
      <div class="title">这是一个企划</div>
      <div class="openTime">发布于{{ openTime }}</div>
    </div>
    <el-divider></el-divider>
    <div class="body">
      <div class="detail">
        <div class="subTitle">需求详情</div>
        <div class="content">{{ detailContent }}</div>
      </div>
      <div class="exampleImg">
        <div class="subTitle">参考例图</div>
        <img
          class="content"
          src="https://i0.hdslb.com/bfs/album/39c8ca474cd7fa25ac7fb883fab6857f8bca55ab.jpg@320w_161h_1e_1c.webp"
          alt=""
        />
      </div>
      <div class="claim">
        <div class="subTitle">稿件要求</div>
        <div class="content">{{ requirements }}</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class OrderDetailRight extends Vue {
  private openTime = "2021-03-01";
  private detailContent =
    "我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求" +
    "我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求" +
    "我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求我是需求";
  private requirements =
    "要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg" +
    "要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg" +
    "要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg要求png，jpg";
}
</script>

<style lang='less' scoped>
.orderDetailRightComponent {
  background-color: #fff;
  height: 560px;
  overflow: auto;
  border-radius: 10px;
  padding: 20px 3%;
  .header {
    padding: 0 1%;
    text-align: left;
    .title {
      font-size: 30px;
      font-weight: 800;
    }
    .openTime {
      font-size: 14px;
      color: #666;
      margin-top: 10px;
    }
  }
  .body {
    text-align: left;
    padding: 0 1%;
    .subTitle {
      font-size: 20px;
      color: darkblue;
      padding: 10px 0;
    }
    .content {
      margin-left: 20px;
    }
  }
}
</style>