<template>
  <div class="orderDetailLeftcomponent">
    <OrderSponsorMsg :msgList="msgList" />
    <SignUpPrinterList :msgList="msgList" />
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import OrderSponsorMsg from "@/components/OrderDetailCom/OrderDetailLeft/OrderSponsorMsg.vue";
import SignUpPrinterList from "@/components/OrderDetailCom/OrderDetailLeft/SignUpPrinterList.vue";

@Component({
  components: {
    OrderSponsorMsg,
    SignUpPrinterList,
  },
})
export default class OrderDetailLeft extends Vue {
  @Prop()
  private msgList!: Array<object>;
  created() {
    console.info(this.msgList) 
  }
}
</script>

<style lang='less' scoped>
.orderDetailLeftcomponent {
  display: block;
}
</style>