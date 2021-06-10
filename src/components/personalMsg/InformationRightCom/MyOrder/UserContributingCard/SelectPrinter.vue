<template>
  <div class="cardComponent">
    <div
      class="avatarItem"
      v-for="(item, index) in printerList"
      :key="index"
      @click="selectItem(item)"
    >
      <img
        :src="item.avatar"
        alt=""
        :class="[
          isNeedToSelect && isSelected(item) ? 'choosedItem' : '',
          'image',
        ]"
      />
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { printerMsg } from "../../../../../types/orderTypes";

@Component({
  components: {},
})
export default class SelectPrinter extends Vue {
  @Prop({ default: () => [] })
  private printerList!: Array<printerMsg>;

  @Prop({ default: false })
  private isNeedToSelect!: boolean;

  private selectedPrinter: printerMsg = (this.printerList[0] as any).printerId;

  private selectItem(item) {
    this.selectedPrinter = item.printerId;
    this.$emit("selectPrinter", item.printerId);
  }

  private isSelected(item) {
    return this.selectedPrinter === item.printerId;
  }
}
</script>

<style lang='less' scoped>
.cardComponent {
  height: 60px;
  line-height: 60px;
  display: flex;
  vertical-align: middle;
  .choosedItem {
    border: 1px solid darkblue;
  }
  .image {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px;
  }
}
</style>