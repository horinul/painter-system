<template>
  <!-- 档期组件 -->
  <div class="scheduleCom">
    <div class="head">
      <img src="../../../static/schedule.png" alt="" class="headIcon" />
      <span class="headText">当前档期</span>
    </div>
    <div class="statusCom">
      当前状态：
      {{ currStatusList[currStatus].label }}
    </div>
    <div class="timeCom">
      目前排期已至：
      {{ currTime }}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { printerScheduleStatus } from "../../../enums/allUserEnums";

@Component({
  components: {},
})
export default class Schedule extends Vue {
  private currStatusList = [
    {
      label: "忙碌",
      status: printerScheduleStatus.busy,
    },
    {
      label: "空闲",
      status: printerScheduleStatus.idle,
    },
  ];
  private currStatus: printerScheduleStatus = printerScheduleStatus.busy;
  private currTime: string = new Date().toLocaleDateString();
}
</script>

<style lang='less' scoped>
.scheduleCom {
  margin: 0 10%;
  .head {
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: left;
    .headIcon {
      height: 20px;
      width: 20px;
      vertical-align: middle;
    }
    .headText {
      color: #333;
      margin-left: 20px;
      font-size: 16px;
      font-weight: 600;
      vertical-align: middle;
    }
  }
  .statusCom {
    text-align: left;
    padding-top: 10px;
  }
  .timeCom {
    text-align: left;
    padding-top: 10px;
  }
}
</style>