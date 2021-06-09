<template>
  <!-- 企划邀请显示的卡片组件 -->
  <div class="orderInviteComponent">
    <div v-if="customerList.length === 0">当前没有数据～</div>
    <el-card
      v-else
      class="boxCard"
      shadow="hover"
      v-for="(customer, index) in customerList"
      :key="index"
      @click="toOrderDetail"
    >
      <div slot="header" class="header">
        <div class="leftHeader">
          <THTag
            :showClose="false"
            color="red"
            class="hasRejectTag"
            v-if="isRejected"
            >已拒绝
          </THTag>
          <span class="name">顾客：{{ customer.user }}</span>
          <span class="price">价格：{{ customer.money }}</span>
        </div>
        <div class="rightHeader">
          <span v-if="!isRejected">
            <THButton @click="agreeInvite(customer.orderId)">接稿</THButton>
            <THButton @click="rejectInvite(customer.orderId)" class="rejectBtn"
              >拒绝</THButton
            >
          </span>
          <THButton type="green">联系顾客</THButton>
        </div>
      </div>
      <div class="cardBody">
        <div class="time">联系时间：{{ customer.startTime }}</div>
        <div class="content">内容：{{ customer.content }}</div>
        <!-- <div class="leave">留言：{{ customer.leave }}</div> -->
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { OrderInvite } from "@/types/orderTypes";
import { UserService } from "@/api";

@Component({
  components: {},
})
export default class InviteCard extends Vue {
  @Prop()
  private customerList!: Array<OrderInvite>;

  @Prop({ default: false })
  private isRejected!: boolean;

  private async agreeInvite(orderId) {
    let res = await UserService.printerAgreeInvite(orderId);
    this.$router.go(0);
  }
  private async rejectInvite(orderId) {
    let res = await UserService.printerRefuseInvite(orderId);
    this.$router.go(0);
  }

  private toOrderDetail(id) {
    this.$router.push("/orderDetail/" + id);
  }
}
</script>

<style lang='less' scoped>
.el-card {
  text-align: left;
}
.orderInviteComponent {
  height: 70vh;
  overflow: auto;
  .boxCard {
    margin-bottom: 20px;
    .header {
      display: flex;
      justify-content: space-between;
      .leftHeader {
        margin-top: 15px;
        display: inline-block;
        .price {
          margin-left: 20px;
        }
      }
      .rightHeader {
        .rejectBtn {
          background-color: #f08080;
        }
      }
    }
    .cardBody > div {
      padding: 5px;
      max-width: 900px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .boxCard:last-child {
    margin-bottom: 0;
  }
}
</style>