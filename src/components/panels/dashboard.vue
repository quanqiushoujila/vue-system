<template>
  <el-col :xs="24" :sm="12" :lg="6" class="small-box dashboard">
    <div :class="bgc">
      <div class="inner">
        <h3>{{data.count}}</h3>
        <p>{{data.name}}</p>
        <div class="icon">
          <i :class="iconName"></i>
        </div>
      </div>
      <a href="#" class="small-box-footer">更多信息<i class="fa fa-arrow-circle-right"></i></a>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'v-dashboard',
  props: {
    data: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  created () {
    this.backgroundColor = ['blue', 'green', 'yellow', 'red']
    this.bgc = 'bg-' + this.backgroundColor[this.index]
    this.iconName = 'fa ' + this.data.icon
  }
}
</script>

<style lang="scss" scoped>
  .small-box + div{
    margin-bottom: 22px;
  }
  .small-box {
    position: relative;
    margin-top: 10px;
    padding: 0 15px;
    color: #fff;
    .inner {
      padding: 10px;
      p,
      h3 {
        margin: 0 0 10px 0;
      }
      h3 {
        font-size: 38px;
        font-weight: bold;
        font-family: "Source Sans Pro";
      }
      p {
        font-family: "SimHei";
      }
    }
    .small-box-footer {
      display: block;
      padding: 3px 0;
      font-family: "SimHei";
      font-size: 12px;
      text-align: center;
      color: #fff;
      background-color: rgba(0, 0, 0, .1);
    }
    .icon {
      position: absolute;
      right: 30px;
      top: 5px;
      font-size: 80px;
      color: rgba(0,0,0,0.15);
    }
  }
</style>
