<template>
  <div class="home">
    <div>主页here</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class MainPage extends Vue {
  get test() {
    return 111;
  }
}
</script>
