<template>
  <div class="orderDetailLeftcomponent">
    <OrderSponsorMsg />
    <SignUpPrinterList />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import OrderSponsorMsg from "@/components/OrderDetailCom/OrderDetailLeft/OrderSponsorMsg.vue";
import SignUpPrinterList from "@/components/OrderDetailCom/OrderDetailLeft/SignUpPrinterList.vue";

@Component({
  components: {
    OrderSponsorMsg,
    SignUpPrinterList,
  },
})
export default class OrderDetailLeft extends Vue {}
</script>

<style lang='less' scoped>
.orderDetailLeftcomponent{
  display: block;
}
</style>