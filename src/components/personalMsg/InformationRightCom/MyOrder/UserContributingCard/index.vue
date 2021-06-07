<template>
  <div class="userContributingCom">
    <el-card
      class="boxCard"
      shadow="hover"
      v-for="(customer, index) in listMsg"
      :key="index"
    >
      <div slot="header" class="header">
        <div class="headerTitle">{{ customer.order.title }}</div>
        <div class="headerPrice">{{ customer.order.money }}RMB</div>
      </div>
      <div class="cardBody">
        <div class="leftBody" v-if="hasPrinterSignUp(customer)">
          <span class="printer">应稿画师：</span>
          <!-- <span>{{customer.printerList}}</span> -->
          <SelectPrinter
            :printerList="customer.printerList"
            v-if="customer.printerList"
          />
        </div>
        <div class="leftBody" v-else>当前订单暂时没有画师应稿噢~</div>
        <div class="rightBody">
          <THButton @click="openModal(index)" v-if="hasPrinterSignUp(customer)"
            >选择画师</THButton
          >
          <THButton type="green">编辑</THButton>
        </div>
      </div>
    </el-card>
    <el-dialog title="选择画师" :visible.sync="dialogVisible" width="30%">
      <SelectPrinter
        v-if="listMsg[selectedOrder]"
        :printerList="listMsg[selectedOrder].printerList"
        :isNeedToSelect="true"
        @selectPrinter="changeSelectPrinter"
      />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="setPrinter()">确 定 </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { UserService } from "@/api";
import SelectPrinter from "@/components/personalMsg/InformationRightCom/MyOrder/UserContributingCard/SelectPrinter.vue";
@Component({
  components: {
    SelectPrinter,
  },
})
export default class UserContributingCard extends Vue {
  private dialogVisible = false;
  private selectedOrder = 0;
  private listMsg = {};
  private selectPrinter = "";

  private openModal(index) {
    this.selectedOrder = index;
    this.dialogVisible = true;
  }
  private hasPrinterSignUp(customer) {
    return customer?.printerList?.length > 0;
  }
  created() {
    this.getList();
  }
  private async getList() {
    let res = await UserService.userContributing();
    this.listMsg = (res.data as any).data.orderList;
  }
  private async setPrinter() {
    this.dialogVisible = false;

    let res = await UserService.userSelectPrinter(
      this.selectPrinter,
      this.listMsg[this.selectedOrder].order.id
    );
    if ((res.data as any).code === 20000) {
      this.$message.success("设置成功");
      this.getList();
    } else {
      this.$message.error((res.data as any).message);
    }
  }

  private changeSelectPrinter(printerId) {
    this.selectPrinter = printerId;
  }
}
</script>

<style lang='less' scoped>
.userContributingCom {
  height: 480px;
  overflow: auto;
  .boxCard {
    margin-bottom: 20px;
    .header {
      display: flex;
      height: 25px;
      line-height: 25px;
      .headerTitle {
        font-size: 18px;
        font-weight: 800;
      }
      .headerPrice {
        margin-left: 25px;
        color: #666;
      }
    }
    .cardBody {
      display: flex;
      justify-content: space-between;
      .leftBody {
        display: flex;
        height: 60px;
        line-height: 60px;
        .printer {
          vertical-align: middle;
        }
      }
      .rightBody {
        margin-top: 10px;
      }
    }
  }
  .boxCard:last-child {
    margin-bottom: 0;
  }
}
</style>