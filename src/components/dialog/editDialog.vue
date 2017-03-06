<template>
  <!-- edit dialog -->
  <el-dialog title="提示" v-model="dialogEdit" :show-close="isClose" size="small" :close-on-press-escape="isClose" :close-on-click-modal="isClose">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="日期">
        <el-input v-model="row.date"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="row.name"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="row.address"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="comfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'v-edit-dialog',
  data () {
    return {
      form: {
        name: '',
        address: '',
        data: ''
      },
      isClose: false
    }
  },
  props: {
    index: {
      type: Number
    },
    row: {
      type: Object
    },
    tableData: {
      type: Object
    }
  },
  computed: {
    ...mapState([
      'dialogEdit'
    ])
  },
  methods: {
    comfirm () {
      this.$store.commit('UPDATA_EDITSTATE')
    },
    cancel () {
      this.$store.commit('UPDATA_EDITSTATE')
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
