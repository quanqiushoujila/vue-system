<template>
  <div class="table-container">
    <h3>table</h3>
    <div class="table">
      <div class="top-container">
        
      </div>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" label="#" width="55"> </el-table-column>
        <el-table-column prop="date" label="日期" width="180" sortable> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" sortable> </el-table-column>
        <el-table-column prop="address" label="地址" width="400" sortable> </el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template scope="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="small" type="danger"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="other-container clearfix" v-if="tableData.length > 0">
        <v-pagination class="pagination-container"></v-pagination>
      </div>
    </div>
    <v-delete-dialog :tableData="tableData"></v-delete-dialog>
    <v-edit-dialog :index="index" :row="row" :tableData="tableData"></v-edit-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vDeleteDialog from '../dialog/deleteDialog.vue'
import vEditDialog from '../dialog/editDialog.vue'
import vPagination from '../pagination/pagination.vue'

export default {
  name: 'v-table',
  data () {
    return {
      index: -1,
      row: {},
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎5',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎6',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎7',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎8',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎9',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎10',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  components: {
    vPagination, vDeleteDialog, vEditDialog
  },
  computed: {
    ...mapState([
      'dialogDelete', 'dialogEdit'
    ])
  },
  methods: {
    handleEdit (index, row) {
      this.$store.commit('UPDATA_EDITSTATE')
      this.index = index
      this.row = row
      // console.log(index)
      // console.log(row)
    },
    handleDelete (index, row) {
      this.$store.commit('UPDATA_DELETESTATE')
    }
  }
}
</script>
<style lang="scss" scoped>
  .table {
    background-color: #fff;
  }
  .other-container  {
    padding: 10px;
    .pagination-container {
      float: right;
    }
  }
</style>
