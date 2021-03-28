<template>
  <div class="component">
    <div class="leftCom"><OrderDetailLeft /></div>
    <div class="rightCom"><OrderDetailRight /></div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import OrderDetailLeft from "@/components/OrderDetailCom/OrderDetailLeft/index.vue";
import OrderDetailRight from "@/components/OrderDetailCom/OrderDetailRight/index.vue";

@Component({
  components: {
    OrderDetailLeft,
    OrderDetailRight,
  },
})
export default class OrderDetail extends Vue {}
</script>

<style lang='less' scoped>
.component {
  display: flex;
  .leftCom {
    flex: 2.5;
    margin: 0 2%;
    height: 500px;
    border-radius: 10px;
  }
  .rightCom {
    flex: 7.5;
    padding: 0 20px;
  }
}
</style>