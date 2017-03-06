<template>
  <el-col :span="9" :offset="1" class="chart-item">
    <div id="chartColumn1" class="chart-box"></div>
  </el-col>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'v-data',
  mounted () {
    let chartColumn = echarts.init(document.getElementById('chartColumn1'))

    let option = {
      title: {
        text: '模板数量',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['部门模板数量', '数据元模板数量', '信息模板数量']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            {value: 335, name: '部门模板数量'},
            {value: 310, name: '数据元模板数量'},
            {value: 234, name: '信息模板数量'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

    chartColumn.setOption(option)
  }
}
</script>

<style lang="scss" scoped>
  .chart-item {
    height: 300px;
    background-color: #fff;
    .chart-box {
      height: 300px;
    }
  }
</style>
