<template>
  <div class="home">
    <div>{{test}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  get test(){
    return 111
  }
}
</script>
