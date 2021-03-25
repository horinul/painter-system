<template>
  <div id="app">
    <Home />
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/views/Home'
@Component({
  components:{
    Home
  },
})
export default class App extends Vue{

}
</script>

<style lang="less" scoped></style>
