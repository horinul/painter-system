<template>
  <div class="component">
    <div class="cardBodyCom">
      <InviteCard :customerList="listMsg" :isRejected="false" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InviteCard from "@/components/personalMsg/InformationRightCom/OrderInvite/inviteCard.vue";
import { UserService } from "../../../../../api";

@Component({
  components: {
    InviteCard,
  },
})
export default class Untreated extends Vue {
  private listMsg = {};
  created() {
    this.getList();
  }
  private async getList() {
    let res = await UserService.printerUntreatInviteList();
    this.listMsg = res.data;
  }
}
</script>

<style lang='less' scoped>
.cardBodyCom {
  margin-top: 10px;
}
</style>