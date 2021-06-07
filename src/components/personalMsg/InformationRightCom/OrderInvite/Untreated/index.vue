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
import { UserService } from "@/api";

@Component({
  components: {
    InviteCard,
  },
})
export default class Untreated extends Vue {
  private customer = [
    {
      name: "亲爱的张三",
      price: "2000",
      time: "2020-2-2",
      content: "想画个张三的头像",
      leave: "dada ddw",
    },
    {
      name: "亲爱的张三",
      price: "2000",
      time: "2020-2-2",
      content: "想画个张三的头像",
      leave: "dada ddw",
    },
    {
      name: "亲爱的张三",
      price: "2000",
      time: "2020-2-2",
      content: "想画个张三的头像",
      leave: "dada ddw",
    },
  ];
  private listMsg = {};
  created() {
    this.getList();
  }
  private async getList() {
    let res = await UserService.printerUntreatInviteList();
    this.listMsg = res.data;
    console.info(this.listMsg)
  }
}
</script>

<style lang='less' scoped>
.cardBodyCom {
  margin-top: 10px;
}
</style>