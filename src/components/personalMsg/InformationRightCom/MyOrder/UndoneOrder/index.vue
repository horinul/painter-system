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

@Component({
  components: {
    OrderCard,
  },
})
export default class UndoneOrder extends Vue {
  private status = wholeOrderInvite.UndoneOrder;

  private listMsg = [];
  created() {
    this.getList();
  }
  private async getList() {
    let res = await UserService.unfinishPlanList();
    this.listMsg = res.data;
    console.info(this.listMsg);
    for (let i = 0; i < this.listMsg.length; i++) {
      if ((this.listMsg[i] as any).order.state === 1) {
        (this.listMsg[i] as any).order.state = "草稿";
      } else if ((this.listMsg[i] as any).order.state === 2) {
        (this.listMsg[i] as any).order.state = "线稿";
      } else if ((this.listMsg[i] as any).order.state === 3) {
        (this.listMsg[i] as any).order.state = "上色";
      } else {
        (this.listMsg[i] as any).order.state = "截止";
      }
    }
  }
}
</script>

<style lang='less' scoped>
.cardBodyCom {
  margin-top: 10px;
}
</style>