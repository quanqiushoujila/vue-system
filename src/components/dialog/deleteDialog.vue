<template>
  <!-- delete dialog -->
  <el-dialog title="提示" v-model="dialogDelete" :show-close="isClose" size="tiny" :close-on-press-escape="isClose" :close-on-click-modal="isClose">
    <span>确定要删除吗{{dialogDelete}}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="comfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'v-delete-dialog',
  data () {
    return {
      isClose: false
    }
  },
  created () {
    console.log('dialogDelete=' + this.dialogDelete)
  },
  props: {
    tableData: {
      type: Object
    }
  },
  computed: {
    ...mapState([
      'dialogDelete'
    ])
  },
  methods: {
    comfirm () {
      this.$store.commit('UPDATA_DELETESTATE')
    },
    cancel () {
      this.$store.commit('UPDATA_DELETESTATE')
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
