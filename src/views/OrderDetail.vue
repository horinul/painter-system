<template>
  <div class="component">
    <div class="leftCom"><OrderDetailLeft :msgList="msgList" /></div>
    <div class="rightCom"><OrderDetailRight :msgList="msgList" /></div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import OrderDetailLeft from "@/components/OrderDetailCom/OrderDetailLeft/index.vue";
import OrderDetailRight from "@/components/OrderDetailCom/OrderDetailRight/index.vue";
import { UserService } from "@/api";

@Component({
  components: {
    OrderDetailLeft,
    OrderDetailRight,
  },
})
export default class OrderDetail extends Vue {
  private msgList = [];
  created() {
    this.getList();
  }
  private async getList() {
    let res = await UserService.orderDetail(this.$route.params.id);
    this.msgList = res.data;
  }
}
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