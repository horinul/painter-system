<template>
  <div class="component">
    <div class="cardBodyCom">
      <OrderCard :customerList="listMsg" :orderStatus="status" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OrderCard from "@/components/personalMsg/InformationRightCom/MyOrder/OrderCard.vue";
import { myOrderCurrStatus, wholeOrderInvite } from "@/enums/orderEnums";
import { UserService } from "@/api";
@Component({
  components: {
    OrderCard,
  },
})
export default class settledOrder extends Vue {
  private status = wholeOrderInvite.SettledOrder;

  private listMsg = {};
  created() {
    this.getList();
  }
  private async getList() {
    let res = await UserService.clearedPlanList();
    this.listMsg = res.data;
  }
}
</script>

<style lang='less' scoped>
.cardBodyCom {
  margin-top: 10px;
}
</style>