<template>
  <el-col :span="14" class="chart-item">
    <div id="chartColumn" class="chart-box"></div>
  </el-col>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'

export default {
  name: 'v-template-number',
  data () {
    return {}
  },
  components: {
    axios
  },
  mounted () {},
  methods: {
    chart (data, name) {
      let chartColumn = echarts.init(document.getElementById('chartColumn'))

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
          data: name
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: data,
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
}
</script>

<style lang="scss" scoped>
  .chart-item {
    height: 400px;
    width: 100%;
    background-color: #fff;
    .chart-box {
      height: 400px;
    }
  }
</style>
