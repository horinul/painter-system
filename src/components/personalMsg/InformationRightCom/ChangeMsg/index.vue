<template>
  <div class="login_container">
    <div class="login_box">
      <h1 class="regiser_title">个人信息修改</h1>

      <el-form
        label-width="90px"
        class="login_form"
        :model="updateForm"
        :rules="rules"
      >
        <el-form-item label="姓名" prop="nickName" style="width: 350px">
          <el-input v-model="updateForm.nickName"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="userName" style="width: 350px">
          <el-input v-model="updateForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="width: 350px">
          <el-input v-model="updateForm.password"></el-input>
        </el-form-item>
        <!-- 按钮区 -->

        <el-button type="primary" class="sumbtn" plain @click="updateInfo()"
          >确定</el-button
        >
        <el-form-item class="btns">
          <el-button
            type="text"
            plain
            style="margin-right: 20px"
            @click="resetLoginForm()"
            >返回</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { UserService } from "../../../../api";
@Component({
  components: {},
})
export default class ChangeMsg extends Vue {
  private updateForm = {
    nickName: "",
    userName: "",
    password: "",
  };
  private rules = {
    nickName: [{ required: true, message: "请输入您的姓名", trigger: "blur" }],
    userName: [
      { required: true, message: "请输入您的电话号码", trigger: "blur" },
    ],

    password: [
      { required: true, message: "请输入您的所在公司名", trigger: "blur" },
    ],
    userSex: [{ required: true, message: "请选择身份", trigger: "blur" }],
  };
  private async updateInfo() {
    let res = await UserService.updateInfo(
      this.updateForm.nickName,
      this.updateForm.userName,
      this.updateForm.password
    );
  }
  private async resetLoginForm() {
    this.$router.go(-1);
  }
}
</script>

<style lang='less' scoped>
.login_container {
  background-color: rgb(245, 245, 245);
  height: 100%;
  overflow: hidden;
}
.login_box {
  width: 450px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 9px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border-radius: 50%;
  border: 1px solid #eee;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -40%);
  background-color: #fff;
}
.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  // position: absolute;
  // top: 30%;
  margin-top: 20px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.regiser_title {
  text-align: center;
  opacity: 0.6;
  padding-top: 20px;
}
.el-form {
  margin-bottom: 15px;
}
.sumbtn {
  position: absolute;
  width: 230px;
  margin-left: -100px;
}
</style>
