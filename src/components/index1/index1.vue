<template>
  <div class="main">
    <el-row class="box">
      <template v-for="(item, index) in (dashboardData)">
        <v-dashboard :data="item" :index="index"></v-dashboard>
      </template>
    </el-row>
    <el-row class="chart-container">
      <v-echarts></v-echarts>
    </el-row>
  </div>
</template>

<script>
import vDashboard from '../panels/dashboard.vue'
import vEcharts from '../charts/echarts.vue'

export default {
  data () {
    return {
      dashboardData: [{icon: 'fa-bar-chart', count: '4', name: '新订单'}, {icon: 'fa-bar-chart', count: '4%', name: '频率比'}, {icon: 'fa-user-plus', count: '4', name: '注册用户'}, {icon: 'fa-pie-chart', count: '4', name: '访客数量'}]
    }
  },
  components: {
    vDashboard, vEcharts
  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 100%;
  }
  .chart-container {
    padding: 0 15px;
    background-color: #fff;
    background-clip: content-box;
  }

</style>
