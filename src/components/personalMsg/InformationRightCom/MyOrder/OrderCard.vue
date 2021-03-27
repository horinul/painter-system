<template>
  <!-- 我的企划里面的每个卡片组件 -->
  <div class="myOrderCardCom">
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
          <span class="name">{{ customer.name }}</span>
          <span class="title">{{ customer.title }}</span>
        </span>
        <THButton type="green" v-if="!isSettledOrder">联系顾客</THButton>
      </div>
      <div class="cardBody">
        <div class="leftCardBody">
          <div class="price">价格：{{ customer.price }}</div>
          <div class="style">稿件风格：{{ customer.style }}</div>
          <div class="format" v-if="isContributing">
            稿件格式：{{ customer.format }}
          </div>
          <div class="startTime" v-if="!isSettledOrder">
            接约时间：{{ customer.startTime }}
          </div>
          <div class="deadline" v-if="!isSettledOrder">
            截止时间：{{ customer.deadline }}
          </div>
          <div class="endTime" v-if="isSettledOrder">
            交稿时间：{{ customer.endTime }}
          </div>
          <div class="currentStatus" v-if="isUndoneOrder">
            当前进度：
            <span>
              <el-select
                v-model="customer.currentStatus"
                placeholder="请选择"
                size="mini"
              >
                <el-option
                  v-for="item in statusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
            </span>
          </div>
          <div class="assess" v-if="isSettledOrder">
            用户评价：
            <el-rate v-model="customer.rate" :disabled="true"></el-rate>
          </div>
        </div>
        <div class="rightCardBody" v-if="isUndoneOrder">
          <!-- upload action="https://jsonplaceholder.typicode.com/posts/" 发起请求的地址 -->
          <el-upload
            action="null"
            class="avatar-uploader"
            :show-file-list="false"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="customer.imageUrl"
              :src="customer.imageUrl"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { myOrder } from "@/types/orderTypes";
import { myOrderCurrStatus, wholeOrderInvite } from "@/enums/orderEnums";

@Component({
  components: {},
})
export default class OrderCard extends Vue {
  @Prop()
  private customerList!: Array<myOrder>;

  @Prop({ default: "", required: true })
  private orderStatus!: wholeOrderInvite;

  private beforeAvatarUpload(file) {
    // const isJPG = file.type === "image/jpeg";
    // const isLt2M = file.size / 1024 / 1024 < 2;

    // if (!isJPG) {
    //   this.$message.error("上传头像图片只能是 JPG 格式!");
    // }
    // if (!isLt2M) {
    //   this.$message.error("上传头像图片大小不能超过 2MB!");
    // }
    // return isJPG && isLt2M;
    return null;
  }

  private statusOptions = [
    {
      value: myOrderCurrStatus.notStart,
      label: "没画",
    },
    {
      value: myOrderCurrStatus.draft,
      label: "草稿",
    },
    {
      value: myOrderCurrStatus.coloring,
      label: "上色",
    },
    {
      value: myOrderCurrStatus.finish,
      label: "完成",
    },
  ];

  get isSettledOrder() {
    return this.orderStatus === wholeOrderInvite.SettledOrder;
  }

  get isContributing() {
    return this.orderStatus === wholeOrderInvite.ContributingOrder;
  }

  get isUndoneOrder() {
    return this.orderStatus === wholeOrderInvite.UndoneOrder;
  }
}
</script>

<style lang='less' scoped>
.myOrderCardCom {
  height: 480px;
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
          .el-rate {
            margin-top: 5px;
          }
        }
      }
      .rightCardBody {
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
          width: 200px;
          height: 150px;
          line-height: 150px;
          text-align: center;
          border: 1px dashed #000;
          border-radius: 5px;
        }
        .avatar {
          width: 200px;
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