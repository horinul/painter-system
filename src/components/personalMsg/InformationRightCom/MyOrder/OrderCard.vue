<template>
  <!-- 我的企划里面的每个卡片组件 -->
  <div class="myOrderCardCom" v-if="customerList">
    <div v-if="customerList.length === 0">当前没有数据噢~</div>
    <div v-else>
      <el-card
        class="boxCard"
        shadow="hover"
        v-for="(customer, index) in customerList"
        :key="index"
      >
        <div slot="header" class="header">
          <span class="headLeft">
            <span>
              <THTag :showClose="false">顾客</THTag>
            </span>
            <span class="name">{{ customer.user.nickName }}</span>
            <span class="title" @click="toDetail(customer.order.id)">{{
              customer.order.title
            }}</span>
          </span>
          <THButton type="green" v-if="!isSettledOrder">联系顾客</THButton>
        </div>
        <div class="cardBody">
          <div class="leftCardBody">
            <div class="price">价格：{{ customer.order.money }}</div>
            <div class="style">稿件风格：{{ customer.order.style }}</div>
            <div class="format" v-if="isContributing">
              稿件格式：{{ customer.format }}
            </div>
            <div class="startTime" v-if="!isSettledOrder">
              接约时间：{{ customer.startTime }}
            </div>
            <div class="deadline" v-if="!isSettledOrder">
              截止时间：{{ customer.order.limitTime.slice(0, 10) }}
            </div>
            <div class="endTime" v-if="isSettledOrder">
              交稿时间：{{ customer.endTime }}
            </div>
            <div class="currentStatus" v-if="isUndoneOrder">
              当前进度：
              <span>
                <el-select
                  v-model="customer.order.state"
                  placeholder="请选择"
                  size="mini"
                  @change="
                    changeOrderStatus(customer.order.id, customer.order.state)
                  "
                >
                  <el-option
                    v-for="item in statusOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="isUser"
                  >
                  </el-option>
                </el-select>
              </span>
            </div>
            <div class="assess" v-if="isSettledOrder">
              用户评价：
              <span v-if="!isUser && customer.order.rate === 0"
                >用户还没有评价哦～</span
              >
              <el-rate
                v-else
                v-model="customer.order.rate"
                :disabled="!isUser ? true : false"
                @change="rateChange"
              ></el-rate>
              <span
                class="saveRate"
                @click="saveRateChange(customer.order.id)"
                v-if="isUser"
              >
                保存评分
              </span>
            </div>
          </div>
          <div class="rightCardBody" v-if="!isContributing">
            <div
              v-if="isUndoneOrder"
              class="deleteImgBtn"
              @click="deleteUpload(customer.order.drawings)"
            >
              <i class="el-icon-circle-close"></i>
            </div>
            <el-upload
              action=""
              v-if="!isUser"
              class="avatar-uploader"
              :show-file-list="false"
              :before-upload="beforeAvatarUpload"
              :http-request="change"
              :data="customer.order.id"
            >
              <img
                v-if="customer.order.drawings"
                :src="customer.order.drawings"
                class="avatar"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <img
              v-if="customer.order.drawings && isUser"
              :src="customer.order.drawings"
              class="avatar"
            />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { wholeMsg } from "../../../../types/orderTypes";
import {
  myOrderCurrStatus,
  wholeOrderInvite,
} from "../../../../enums/orderEnums";
import { UserService } from "../../../../api";

@Component({
  components: {},
})
export default class OrderCard extends Vue {
  @Prop()
  private customerList!: Array<wholeMsg>;

  @Prop({ default: "", required: true })
  private orderStatus!: wholeOrderInvite;

  private rateTmp = 0;
  private async change(item) {
    let formData = new FormData();
    formData.append("file", item.file);
    const res = await UserService.uploadImage(formData, item.data);
    if (res.data["success"]) {
      this.$router.go(0);
    } else {
      this.$message.error("上传失败");
    }
  }
  private async deleteUpload(url) {
    const res = await UserService.deleteImage(url);
    if (res.data["success"]) {
      this.$router.go(0);
    } else {
      this.$message.error("上传失败");
    }
  }

  private beforeAvatarUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      this.$message.error("上传头像图片大小不能超过 2MB!");
    }
    return isLt2M;
  }

  mounted() {
    setTimeout(() => {
      for (let i = 0; i < this.customerList.length; i++) {
        if ((this.customerList[i] as any).order.state === 0) {
          (this.customerList[i] as any).order.state = "未开始";
        } else if ((this.customerList[i] as any).order.state === 1) {
          (this.customerList[i] as any).order.state = "草稿";
        } else if ((this.customerList[i] as any).order.state === 2) {
          (this.customerList[i] as any).order.state = "线稿";
        } else if ((this.customerList[i] as any).order.state === 3) {
          (this.customerList[i] as any).order.state = "上色";
        } else if ((this.customerList[i] as any).order.state === 4) {
          (this.customerList[i] as any).order.state = "截止";
        }
      }
    }, 1000);
  }

  get isUser() {
    return localStorage.getItem("isUser") === "true";
  }

  private toDetail(orderId) {
    this.$router.push({
      name: "OrderDetail",
      path: "/orderDetail",
      params: {
        id: orderId,
      },
    });
  }

  private statusOptions = [
    {
      value: myOrderCurrStatus.start,
      label: "未开始",
    },
    {
      value: myOrderCurrStatus.draft,
      label: "草稿",
    },
    {
      value: myOrderCurrStatus.lineDraft,
      label: "线稿",
    },
    {
      value: myOrderCurrStatus.coloring,
      label: "上色",
    },
    {
      value: myOrderCurrStatus.deadline,
      label: "截止",
    },
  ];

  private async changeOrderStatus(id, state) {
    let res = await UserService.printerChangeOrderStatus(id, state);
    if (state === "4" && res.data["message"] === "画稿未上传") {
      this.$message.warning("画稿未上传，修改失败");
    } else {
      this.$router.go(0);
    }
  }

  private async saveRateChange(orderId) {
    const res = await UserService.changeOrderRate(orderId, this.rateTmp);
    if (res.data["code"] === 20000) {
      this.$message.success("保存成功");
    } else {
      this.$message.error("保存失败");
    }
  }

  get isSettledOrder() {
    return this.orderStatus === wholeOrderInvite.SettledOrder;
  }

  get isContributing() {
    return this.orderStatus === wholeOrderInvite.ContributingOrder;
  }

  get isUndoneOrder() {
    return this.orderStatus === wholeOrderInvite.UndoneOrder;
  }

  private rateChange(rate) {
    this.rateTmp = rate;
  }
}
</script>

<style lang='less' scoped>
.myOrderCardCom {
  height: 70vh;
  overflow: auto;
  .el-card {
    text-align: left;
  }
  .boxCard {
    margin-bottom: 20px;
    .header {
      display: flex;
      justify-content: space-between;
      .headLeft {
        margin-top: 15px;
        .name {
          font-size: 12px;
          margin-right: 20px;
          color: #666;
        }
        .title {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .cardBody {
      display: flex;
      padding: 0 5px;
      justify-content: space-between;
      .leftCardBody > div {
        height: 30px;
        line-height: 30px;
      }
      .leftCardBody {
        .currentStatus {
          .el-select {
            width: 100px;
          }
        }
        .assess {
          display: flex;
          .saveRate {
            cursor: pointer;
            width: 70px;
            height: 30px;
            background-color: darkcyan;
            color: #fff;
            text-align: center;
            line-height: 30px;
            border-radius: 4px;
          }
          .el-rate {
            margin-top: 5px;
          }
        }
      }
      .rightCardBody {
        position: relative;
        .deleteImgBtn {
          position: absolute;
          color: #d3d3d3;
          right: 0px;
          top: -4px;
          cursor: pointer;
        }
        .avatar-uploader .el-upload {
          border: 1px dashed #d9d9d9;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
          border-color: #409eff;
        }
        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 240px;
          height: 150px;
          line-height: 150px;
          text-align: center;
          border: 1px dashed #000;
          border-radius: 5px;
        }
        .avatar {
          border-radius: 6px;
          width: 240px;
          height: 150px;
          display: block;
        }
      }
    }
  }
  .boxCard:last-child {
    margin-bottom: 0;
  }
}
</style>