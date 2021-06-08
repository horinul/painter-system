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
import { wholeOrderInvite } from "@/enums/orderEnums";
import { UserService } from "@/api";
import { identify } from "@/enums/allUserEnums";

@Component({
  components: {
    OrderCard,
  },
})
export default class UndoneOrder extends Vue {
  private status = wholeOrderInvite.UndoneOrder;
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
    let res = await UserService.printerUnfinishPlanList();
    this.listMsg = res.data;
    // for (let i = 0; i < this.listMsg.length; i++) {
    //   if ((this.listMsg[i] as any).order.state === 1) {
    //     (this.listMsg[i] as any).order.state = "草稿";
    //   } else if ((this.listMsg[i] as any).order.state === 2) {
    //     (this.listMsg[i] as any).order.state = "线稿";
    //   } else if ((this.listMsg[i] as any).order.state === 3) {
    //     (this.listMsg[i] as any).order.state = "上色";
    //   } else {
    //     (this.listMsg[i] as any).order.state = "截止";
    //   }
    // }
  }
  private async getUserList() {
    let res = await UserService.userUnfinishList();
    this.listMsg = (res.data as any).data.list;
    // for (let i = 0; i < this.listMsg.length; i++) {
    //   if ((this.listMsg[i] as any).order.state === 1) {
    //     (this.listMsg[i] as any).order.state = "草稿";
    //   } else if ((this.listMsg[i] as any).order.state === 2) {
    //     (this.listMsg[i] as any).order.state = "线稿";
    //   } else if ((this.listMsg[i] as any).order.state === 3) {
    //     (this.listMsg[i] as any).order.state = "上色";
    //   } else {
    //     (this.listMsg[i] as any).order.state = "截止";
    //   }
    // }
  }
}
</script>

<style lang='less' scoped>
.cardBodyCom {
  margin-top: 10px;
}
</style>