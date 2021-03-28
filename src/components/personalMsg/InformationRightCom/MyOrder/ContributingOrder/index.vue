<template>
  <div class="component">
    <div class="cardBodyCom">
      <OrderCard
        :customerList="customer"
        :orderStatus="status"
        v-if="!isUser"
      />
      <UserContributingCard />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OrderCard from "@/components/personalMsg/InformationRightCom/MyOrder/OrderCard.vue";
import UserContributingCard from "@/components/personalMsg/InformationRightCom/MyOrder/UserContributingCard/index.vue";
import { myOrderCurrStatus, wholeOrderInvite } from "@/enums/orderEnums";
import { identify } from "@/enums/allUserEnums";

@Component({
  components: {
    OrderCard,
    UserContributingCard,
  },
})
export default class contributingOrder extends Vue {
  private status = wholeOrderInvite.ContributingOrder;
  private identify = identify.user;
  private customer = [
    {
      name: "亲爱的张三",
      title: "张三的头像",
      price: "2000",
      style: "日系",
      format: "jpg",
      startTime: "2020-1-1",
      deadline: "2020-2-2",
      endTime: "2020-2-3",
      currentStatus: myOrderCurrStatus.notStart,
      rate: 0,
    },
    {
      name: "亲爱的张三",
      title: "张三的头像",
      price: "2000",
      style: "日系",
      format: "jpg",
      startTime: "2020-1-1",
      deadline: "2020-2-2",
      endTime: "2020-2-3",
      currentStatus: myOrderCurrStatus.notStart,
      rate: 4,
    },
    {
      name: "亲爱的张三",
      title: "张三的头像",
      price: "2000",
      style: "日系",
      format: "jpg",
      startTime: "2020-1-1",
      deadline: "2020-2-2",
      endTime: "2020-2-3",
      currentStatus: myOrderCurrStatus.notStart,
      rate: 5,
    },
  ];
  get isUser() {
    return this.identify === identify.user;
  }
}
</script>

<style lang='less' scoped>
.cardBodyCom {
  margin-top: 10px;
}
</style>