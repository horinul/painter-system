<template>
  <div class="userContributingCom">
    <el-card
      class="boxCard"
      shadow="hover"
      v-for="(customer, index) in customerList"
      :key="index"
    >
      <div slot="header" class="header">
        <div class="headerTitle">{{ customer.title }}</div>
        <div class="headerPrice">{{ customer.price }}RMB</div>
      </div>
      <div class="cardBody">
        <div class="leftBody" v-if="hasPrinterSignUp(customer)">
          <span class="printer">应稿画师：</span>
          <SelectPrinter :printerList="customer.signUpPrinterList" />
        </div>
        <div class="leftBody" v-else>
          当前订单暂时没有画师应稿噢~
        </div>
        <div class="rightBody">
          <THButton @click="openModal(index)" v-if="hasPrinterSignUp(customer)">选择画师</THButton>
          <THButton type="green">编辑</THButton>
        </div>
      </div>
    </el-card>
    <el-dialog title="选择画师" :visible.sync="dialogVisible" width="30%">
      <SelectPrinter
        :printerList="customerList[selectedOrder].signUpPrinterList"
        :isNeedToSelect="true"
      />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { myOrderCurrStatus } from "@/enums/orderEnums";
import SelectPrinter from "@/components/personalMsg/InformationRightCom/MyOrder/UserContributingCard/SelectPrinter.vue";
@Component({
  components: {
    SelectPrinter,
  },
})
export default class UserContributingCard extends Vue {
  private customerList = [
    {
      name: "亲爱的张三",
      title: "张三的头像",
      price: "2000",
      style: "日系",
      format: "jpg",
      startTime: "2020-1-1",
      deadline: "2020-2-2",
      endTime: "2020-2-3",
      currentStatus: myOrderCurrStatus.notStart,
      rate: 0,
      signUpPrinterList: [
        {
          name: "111",
          id: 111,
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        },
        {
          name: "222",
          id: 222,
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        },
        {
          name: "333",
          id: 333,
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        },
      ],
      selectPrinter: {
        name: "111",
        id: 111,
        avatar:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      },
    },
    {
      name: "亲爱的张三",
      title: "张三的头像",
      price: "2000",
      style: "日系",
      format: "jpg",
      startTime: "2020-1-1",
      deadline: "2020-2-2",
      endTime: "2020-2-3",
      currentStatus: myOrderCurrStatus.notStart,
      rate: 4,
    },
    {
      name: "亲爱的张三",
      title: "张三的头像",
      price: "2000",
      style: "日系",
      format: "jpg",
      startTime: "2020-1-1",
      deadline: "2020-2-2",
      endTime: "2020-2-3",
      currentStatus: myOrderCurrStatus.notStart,
      rate: 5,
    },
  ];
  private dialogVisible = false;
  private selectedOrder = 0;
  private openModal(index) {
    this.selectedOrder = index;
    this.dialogVisible = true;
  }
  private hasPrinterSignUp(customer) {
    return customer?.signUpPrinterList?.length > 0;
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