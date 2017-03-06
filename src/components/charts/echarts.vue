<template>
  <div class="echart-tabs-container">
    <div class="tabs-nav clearfix">
      <h4 class="title pull-left">标题</h4>
      <ul class="clearfix">
        <li v-for="(name, index) in echartname" :class="{active: indexModule === index}" @click="chooseEchart(index)"><a href="javascript:void(0);">{{name}}</a></li>
      </ul>
    </div>
    <div class="tabs-container">
      <v-templateNumber ref="eachart"></v-templateNumber>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import vTemplateNumber from './templateNumber.vue'
import vData from './data.vue'

export default {
  name: 'v-tabs',
  data () {
    return {
      echartname: ['模板1', '模板2'],
      name: [],
      echartdata: [],
      indexModule: 0
    }
  },
  components: {
    vData, vTemplateNumber, axios
  },
  created () {
    axios.get('/api/data1').then((response) => {
      this.echartdata = response.data.data
      this.$nextTick(() => {
        this.getEchartName(this.echartdata)

        this.$refs.eachart.chart(this.echartdata, this.name)
      })
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    chooseEchart (index) {
      this.indexModule = index
      axios.get('/api/data' + (index + 1)).then((response) => {
        this.echartdata = response.data.data

        this.getEchartName(this.echartdata)

        this.$refs.eachart.chart(this.echartdata, this.name)
      }).catch(function (error) {
        console.log(error)
      })
    },
    getEchartName (data) {
      data.forEach((item) => {
        this.name.push(item.name)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .echart-tabs-container {
    padding-bottom: 10px;
    .tabs-nav {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ddd;
      .title {
        margin: 0;
        padding-left: 10px;
      }
      ul {
        float: right;
      }
      li {
        float: left;
        line-height: 47px;
        border: 1px solid transparent;
        border-top-width: 3px;
        &.active {
          position: relative;
          z-index: 10;
          border-style: solid;
          border-top-color: #3c8dbc;
          border-left-color: #f4f4f4;
          border-right-color: #f4f4f4;
          border-bottom-color: #fff;
        }
        &:last-child {
          border-right-color: transparent;
        }
      }
      a {
        display: block;
        padding: 0 15px;
        color: #333;
      }
    }
    .tabs-container {
      padding: 10px;
    }
  }
</style>
