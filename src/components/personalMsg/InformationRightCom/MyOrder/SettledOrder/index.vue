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
import { wholeOrderInvite } from "../../../../../enums/orderEnums";
import { UserService } from "../../../../../api";
import { identify } from "../../../../../enums/allUserEnums";
@Component({
  components: {
    OrderCard,
  },
})
export default class settledOrder extends Vue {
  private status = wholeOrderInvite.SettledOrder;
  private identify = identify.printer;
  private listMsg = [];
  created() {
    if (localStorage.getItem("isUser") === "true") {
      this.getUserList();
    } else {
      this.getPrinterList();
    }
  }
  private async getPrinterList() {
    let res = await UserService.printerClearedPlanList();
    this.listMsg = res.data;
  }
  private async getUserList() {
    let res = await UserService.userClearedList();
    this.listMsg = (res.data as any).data.list;
  }
}
</script>

<style lang='less' scoped>
.cardBodyCom {
  margin-top: 10px;
}
</style>