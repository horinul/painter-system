<template>
  <div class="userContributingCom">
    <el-dialog
      title="编辑企划"
      :visible.sync="editDialogVisible"
      width="50%"
      v-if="listMsg"
    >
      <div class="dialogCom">
        <el-form
          ref="form"
          :model="listMsg[selectedOrder].order"
          label-width="100px"
        >
          <el-form-item label="企划名称">
            <el-input v-model="listMsg[selectedOrder].order.title"></el-input>
          </el-form-item>
          <el-form-item label="企划价格">
            <el-input
              v-model="listMsg[selectedOrder].order.money"
              type="number"
            ></el-input>
          </el-form-item>

          <el-form-item label="期待完成时间" style="text-align: left">
            <el-date-picker
              placeholder="选择日期"
              type="date"
              v-model="listMsg[selectedOrder].order.limitTime"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="稿件格式" style="text-align: left">
            <el-select
              v-model="listMsg[selectedOrder].order.style"
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.value"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企划详情">
            <el-input
              type="textarea"
              v-model="listMsg[selectedOrder].order.content"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="editMsg(listMsg[selectedOrder].order.id)"
        >
          确 定
        </el-button>
      </span>
    </el-dialog>
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
          <THButton
            @click="createSelectVisible(index)"
            v-if="hasPrinterSignUp(customer)"
            >选择画师</THButton
          >
          <THButton type="green" @click="openEditModal(index)">编辑</THButton>
        </div>
      </div>
    </el-card>
    <el-dialog title="选择画师" :visible.sync="SelectDialogVisible" width="30%">
      <SelectPrinter
        v-if="listMsg[selectedOrder]"
        :printerList="listMsg[selectedOrder].printerList"
        :isNeedToSelect="true"
        @selectPrinter="changeSelectPrinter"
      />
      <span slot="footer" class="dialog-footer">
        <el-button @click="SelectDialogVisible = false">取 消</el-button>
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
  private SelectDialogVisible = false;
  private editDialogVisible = false;
  private selectedOrder = 0;
  private listMsg = {};
  private selectPrinter = "";

  // private listMsg[selectedOrder] = {};

  private createSelectVisible(index) {
    this.selectedOrder = index;
    this.SelectDialogVisible = true;
  }

  private openEditModal(index) {
    this.selectedOrder = index;
    this.editDialogVisible = true;
    // this.listMsg[selectedOrder] = JSON.parse(JSON.stringify(this.listMsg[this.selectedOrder]))
  }
  private hasPrinterSignUp(customer) {
    return customer?.printerList?.length > 0;
  }

  private async editMsg(orderId) {
    const res = await UserService.updateOrder(
      this.listMsg[this.selectedOrder].order.title,
      this.listMsg[this.selectedOrder].order.money,
      this.listMsg[this.selectedOrder].order.limitTime,
      this.listMsg[this.selectedOrder].order.style,
      this.listMsg[this.selectedOrder].order.content,
      orderId
    );
    console.info(res);
    if (res.data["code"] === 20000) {
      this.editDialogVisible = false;
      this.$message.success("上传成功");
    } else {
      this.$message.error("修改失败");
    }
  }
  private options = [
    {
      value: "png",
    },
    {
      value: "jpg",
    },
    {
      value: "jpeg",
    },
    {
      value: "webp",
    },
    {
      value: "svg",
    },
  ];
  created() {
    this.getList();
  }
  private async getList() {
    let res = await UserService.userContributing();
    this.listMsg = (res.data as any).data.orderList;
  }
  private async setPrinter() {
    this.SelectDialogVisible = false;

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
  height: 70vh;
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