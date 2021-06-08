<template>
  <div class="orderDetailRightComponent" v-if="msgList.data">
    <div class="header">
      <div class="title">{{ msgList.data.order.title }}</div>
      <div class="openTime">发布于{{ openTime }}</div>
    </div>
    <el-divider></el-divider>
    <div class="body">
      <div class="detail">
        <div class="subTitle">需求详情</div>
        <div class="content">{{ msgList.data.order.content }}</div>
      </div>
      <div class="">
        <div class="subTitle">稿件格式</div>
        <div class="content">{{ msgList.data.order.style }}</div>
      </div>
      <div class="">
        <div class="subTitle">结束时间</div>
        <div class="content">{{ msgList.data.order.limitTime }}</div>
      </div>
      <!-- <div class="exampleImg">
        <div class="subTitle">参考例图</div>
        <img class="content" :src="msgList.data.order.drawings" alt="" />
      </div> -->
      <div class="claim">
        <div class="subTitle">稿件要求</div>
        <div class="content">{{ msgList.data.order.format }}</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class OrderDetailRight extends Vue {
  @Prop()
  private msgList!: Array<object>;
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