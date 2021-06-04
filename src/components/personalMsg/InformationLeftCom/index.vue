<template>
  <!-- 个人信息页（画师加+用户）信息页左侧总组件 -->
  <div class="leftComponent">
    <div class="msgTitle">
      <el-avatar
        :size="60"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <span class="identifyText">{{ identifyText }}</span>
      <THTag class="identifyTag" :showClose="false" v-if="!isUser">
        {{ identifyTag }}
      </THTag>
      <span v-else class="addOrder" @click="dialogVisible = true"
        >发起企划</span
      >
    </div>
    <el-divider></el-divider>
    <div class="msgLink">
      <div
        :class="[
          'link',
          item.selected ? 'linkFocus' : '',
          item.show ? '' : 'linkHidden',
        ]"
        v-for="(item, index) in linkObj"
        :key="index"
        @click="toRoute(item)"
      >
        <img :src="item.src" alt="" class="linkIcon" />
        <span class="linkText">{{ item.name }}</span>
      </div>
    </div>
    <el-divider v-if="!isUser"></el-divider>
    <schedule v-if="!isUser" />
    <el-dialog title="发起企划" :visible.sync="dialogVisible" width="50%">
      <div class="dialogCom">
        <el-form ref="form" :model="order" label-width="100px">
          <el-form-item label="企划名称">
            <el-input v-model="order.title"></el-input>
          </el-form-item>
          <el-form-item label="企划价格">
            <el-input v-model="order.money" type="number"></el-input>
          </el-form-item>

          <el-form-item label="期待完成时间" style="text-align: left">
            <el-date-picker
              placeholder="选择日期"
              type="date"
              v-model="order.limitTime"
            ></el-date-picker>
          </el-form-item>
          <!-- <el-form-item label="参考例图" class="uploadCom">
            <el-upload
              action="http://1.15.57.103:8085/file/upload?module=avator"
              class="avatar-uploader"
              :show-file-list="false"
            >
              <img v-if="order.img" :src="order.img" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item> -->
          <el-form-item label="稿件格式" style="text-align: left">
            <el-select v-model="order.style" placeholder="请选择">
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
              v-model="order.content"
              autosize
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrder()"> 确 定 </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import schedule from "@/components/personalMsg/InformationLeftCom/Schedule.vue";
import { identify } from "@/enums/allUserEnums";
import { UserService } from "@/api";
@Component({
  components: {
    schedule,
  },
})
export default class InformationLeftCom extends Vue {
  private identifyText: String = "我是画师";
  private identifyTag: String = "认证画师";
  private identify: identify = identify.user;
  private dialogVisible = false;
  private order = {
    title: "",
    money: "",
    limitTime: "",
    style: "",
    content: "",
  };
  private linkObj = {
    myOrder: {
      label: "myOrder",
      name: "我的企划",
      src: require("../../../static/myOrder.png"),
      selected: false,
      children: ["contributingOrder", "settledOrder", "undoneOrder"],
      show: true,
    },
    orderInvite: {
      label: "orderInvite",
      name: "企划邀请",
      src: require("../../../static/orderInvite.png"),
      selected: false,
      children: ["untreated", "rejected"],
      show: !this.isUser,
    },
    msgList: {
      label: "msgList",
      name: "消息列表",
      src: require("../../../static/msgList.png"),
      selected: false,
      children: [],
      show: true,
    },
  };
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
    for (let item in this.linkObj) {
      if (this.linkObj[item].children.includes(this.$route.name)) {
        this.linkObj[item].selected = true;
      }
    }
  }
  private async addOrder() {
    let res = await UserService.addOrder(
      this.order.title,
      this.order.money,
      this.order.limitTime,
      this.order.style,
      this.order.content
    );
    console.info(res);
    this.dialogVisible = false;
  }

  get isUser() {
    return this.identify === identify.user;
  }
  private toRoute(item) {
    this.$router.push(item.label);
    for (let item in this.linkObj) {
      this.linkObj[item].selected = false;
    }
    item.selected = true;
  }
}
</script>

<style lang='less' scoped>
.el-divider--horizontal {
  margin: 12px 0;
}
.msgTitle {
  display: flex;
  align-content: center;
  height: 60px;
  line-height: 60px;
  .identifyText {
    margin-left: 20px;
    font-size: 18px;
    font-weight: 800;
  }
  .identifyTag {
    margin-left: 20px;
    margin-top: 22px;
  }
  .addOrder {
    border: 1px solid blue;
    background-color: #6495ed;
    color: #fff;
    padding: 4px 6px;
    line-height: 20px;
    height: 20px;
    margin-top: 15px;
    margin-left: 40px;
    border-radius: 5px;
    cursor: pointer;
  }
}
.msgLink {
  text-align: left;
  margin: 0 10%;
  .linkIcon {
    height: 20px;
    width: 20px;
    padding-right: 20px;
    display: inline-block;
    vertical-align: middle;
  }
  .link {
    padding-top: 8px;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
  }
  .link:hover {
    color: #483d8b;
  }
  .linkFocus {
    font-weight: 800;
  }
}
.linkHidden {
  display: none !important;
}
.uploadCom {
  text-align: left;
  .avatar-uploader {
    margin-top: 10px;
  }
  .avatar-uploader .el-upload {
    border: 1px solid #87cefa;
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
</style>