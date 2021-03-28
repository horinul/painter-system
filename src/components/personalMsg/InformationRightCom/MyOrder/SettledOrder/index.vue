<template>
  <div class="component">
    <div class="cardBodyCom">
      <OrderCard :customerList="customer" :orderStatus="status" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OrderCard from "@/components/personalMsg/InformationRightCom/MyOrder/OrderCard.vue";
import { myOrderCurrStatus, wholeOrderInvite } from "@/enums/orderEnums";

@Component({
  components: {
    OrderCard,
  },
})
export default class settledOrder extends Vue {
  private status = wholeOrderInvite.SettledOrder;

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
      currentStatus: myOrderCurrStatus.finish,
      imageUrl:"https://i0.hdslb.com/bfs/album/39c8ca474cd7fa25ac7fb883fab6857f8bca55ab.jpg@320w_161h_1e_1c.webp",
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
      currentStatus: myOrderCurrStatus.finish,
      imageUrl:"https://i0.hdslb.com/bfs/album/39c8ca474cd7fa25ac7fb883fab6857f8bca55ab.jpg@320w_161h_1e_1c.webp",
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
      currentStatus: myOrderCurrStatus.finish,
      imageUrl:"https://i0.hdslb.com/bfs/album/39c8ca474cd7fa25ac7fb883fab6857f8bca55ab.jpg@320w_161h_1e_1c.webp",
      rate: 5,
    },
  ];
}
</script>

<style lang='less' scoped>
.cardBodyCom {
  margin-top: 10px;
}
</style>