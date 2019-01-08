<template>
  <div>
    <mt-search
      v-model="nn"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
    <!-- <span class="iconfont icon-gouwuche"></span> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      nn:''
    }
  }
}
</script>

<style scoped>

</style>
