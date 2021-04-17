<template>
  <!-- 企划邀请显示的卡片组件 -->
  <div class="orderInviteComponent">
    <el-card
      class="boxCard"
      shadow="hover"
      v-for="(customer, index) in customerList"
      :key="index"
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
          <span class="name">顾客：{{ customer.name }}</span>
          <span class="price">价格：{{ customer.price }}</span>
        </div>
        <div class="rightHeader">
          <span v-if="!isRejected">
            <THButton @click="agreeInvite">接稿</THButton>
            <THButton class="rejectBtn">拒绝</THButton>
          </span>
          <THButton type="green">联系顾客</THButton>
        </div>
      </div>
      <div class="cardBody">
        <div class="time">联系时间：{{ customer.time }}</div>
        <div class="content">内容：{{ customer.content }}</div>
        <div class="leave">留言：{{ customer.leave }}</div>
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

  private async agreeInvite() {
    let res = await UserService.agreeInvite();
  }
}
</script>

<style lang='less' scoped>
.el-card {
  text-align: left;
}
.orderInviteComponent {
  height: 480px;
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
    }
  }
  .boxCard:last-child {
    margin-bottom: 0;
  }
}
</style>