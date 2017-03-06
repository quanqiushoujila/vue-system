<template>
  <div class="panel-container">
    <v-header></v-header>
    <div class="panel-center">
      <v-menu></v-menu>
      <router-view class="panel-main"></router-view>
      <!-- <div class="panel-main"></div> -->
    </div>
  </div>
</template>

<script>
import vHeader from '../header/header'
import vMenu from '../menu/menu'

export default {
  name: 'v-index',
  components: {
    vHeader,
    vMenu
  }
}
</script>

<style lang="scss" scoped>
  .panel-container {
    position: absolute;
    bottom: 0;
    top: 0;
    width: 100%;
    overflow: hidden;
  }
  .panel-center {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .panel-main {
    position: absolute;
    top: 0;
    left: 230px;
    bottom: 0;
    right: 0;
    padding: 10px;
    overflow: auto;
    transition: left .3s;
    background-color: #ecf0f5;
  }
</style>
