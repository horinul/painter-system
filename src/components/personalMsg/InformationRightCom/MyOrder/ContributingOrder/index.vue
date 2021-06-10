<template>
  <div class="component">
    <div class="cardBodyCom">
      <OrderCard :customerList="listMsg" :orderStatus="status" v-if="!isUser" />
      <UserContributingCard v-else />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OrderCard from "@/components/personalMsg/InformationRightCom/MyOrder/OrderCard.vue";
import UserContributingCard from "@/components/personalMsg/InformationRightCom/MyOrder/UserContributingCard/index.vue";
import { wholeOrderInvite } from "../../../../../enums/orderEnums";
import { UserService } from "../../../../../api";

@Component({
  components: {
    OrderCard,
    UserContributingCard,
  },
})
export default class contributingOrder extends Vue {
  private status = wholeOrderInvite.ContributingOrder;
  private listMsg = {};
  created() {
    this.getList();
  }
  private async getList() {
    let res = await UserService.printerPlaningList();
    this.listMsg = res.data;
  }
  get isUser() {
    return localStorage.getItem("isUser")==='true';
  }
}
</script>

<style lang='less' scoped>
.cardBodyCom {
  margin-top: 10px;
}
</style>