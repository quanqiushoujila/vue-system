<template>
  <div class="block">
    <el-pagination
      :current-page="1"
      :page-sizes="[10, 20, 30, 40]"
      layout="prev, pager, next, jumper, total"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'v-pagination'
}
</script>

<style lang="scss" scoped>
  
</style>
