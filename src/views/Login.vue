<template>
  <div class="login_container">
    <div :class="['login_box', isRegister ? '' : 'small_box']">
      <div class="title" v-if="!isRegister">登录</div>
      <div class="title" v-else>注册</div>
      <el-form
        ref="loginFormRef"
        label-width="0px"
        class="login_form"
        :model="loginForm"
        :rules="rules"
      >
        <!-- 用户名 -->
        <el-form-item prop="userName">
          <el-input
            placeholder="请输入电话号码"
            prefix-icon="el-icon-mobile-phone"
            v-model="loginForm.userName"
          ></el-input>
        </el-form-item>
        <el-form-item prop="nickName" v-if="isRegister">
          <el-input
            placeholder="请输入昵称"
            prefix-icon="el-icon-chat-round"
            v-model="loginForm.nickName"
          ></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-unlock"
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>

        <!-- 按钮区 -->
        <el-form-item class="btns">
          <el-radio v-model="loginForm.identify" :label="0">画师</el-radio>
          <el-radio
            v-model="loginForm.identify"
            :label="1"
            style="margin-right: 110px"
            >约稿用户</el-radio
          >
          <span class="changeLink" v-if="!isRegister" @click="changeStatus"
            >去注册</span
          >
          <span class="changeLink" v-if="isRegister" @click="changeStatus"
            >去登陆</span
          >
          <el-button type="primary" plain @click="regist" v-if="isRegister"
            >注册
          </el-button>
          <el-button type="primary" plain @click="login" v-if="!isRegister">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserService } from "@/api";

@Component({
  components: {},
})
export default class Login extends Vue {
  private loginForm = {
    userName: "",
    nickName: "",
    password: "",
    identify: 0,
  };
  private rules = {
    account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  };
  private isRemember = null;
  private isRegister = true;
  private changeStatus() {
    this.isRegister = !this.isRegister;
  }
  private async login() {
    let res = await UserService.login(
      this.loginForm.identify,
      this.loginForm.userName,
      this.loginForm.password
    );
    let data = res.data as any;
    if (data.code === 20001) {
      this.$message.error(data.msg);
    } else if (data.code === 20000) {
      this.$message.success("登陆成功");
      this.$router.push("/contributingOrder");
      localStorage.setItem("loginToken", data.data.token);
      this.$store.commit("setToken", data.data.token);
    }
  }
  private async regist() {
    let res = await UserService.register(
      this.loginForm.userName,
      this.loginForm.nickName,
      this.loginForm.password,
      this.loginForm.identify
    );
    let data = res.data as any;
    if (data.code === 1) {
      this.$message.error(data.msg);
    } else if (data.code === 0) {
      this.$message.success("注册成功");
    }
  }
}
</script>

<style lang="less" scoped>
.main_title {
  color: white;
  padding: 20px;
  position: absolute;
  font-size: 20px;
}
.login_container {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  min-height: 100%;
}

.login_box {
  width: 450px;
  height: 320px;
  background-color: #fff;
  border-radius: 9px;
  position: absolute;
  margin-top: 150px;
  margin-left: 50%;
  transform: translate(-50%);
  .title {
    position: absolute;
    color: #000;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 18px;
  }
}
.small_box {
  height: 250px;
}
.changeLink {
  margin-right: 20px;
  color: blue;
  cursor: pointer;
}
.remeber {
  color: #898989;
  margin-left: 2px;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  margin-top: 42px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box; //怪异盒模型（告诉网页padding等也包括在长宽里面）
}

@media (min-width: 270px) and (max-width: 450px) {
  .login_container {
    background-size: cover;
  }
  .login_box {
    width: 90%;
  }
}
</style>
