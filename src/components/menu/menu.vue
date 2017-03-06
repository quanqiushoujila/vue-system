<template>
  <nav class="menu-container">
    <el-menu theme="dark" router :default-active="$route.path">
      <el-menu-item index="/index">
        <!-- <router-link to="/index" class="home"> -->
         <i class="el-icon-message"></i>首页
        <!-- </router-link> -->
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>模板设计</template>
        <el-menu-item index="/d3">d3</el-menu-item>
        <el-menu-item index="/table">table</el-menu-item>
        <el-menu-item index="2-3">业务梳理模板</el-menu-item>
        <el-menu-item index="2-3">资源分类模板</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-message"></i>导航五</el-menu-item>
      <el-menu-item index="6"><i class="el-icon-message"></i>导航六</el-menu-item>
      <el-menu-item index="7"><i class="el-icon-message"></i>导航七</el-menu-item>
      <el-menu-item index="8"><i class="el-icon-message"></i>导航八</el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
export default {
  name: 'v-nav'
}
</script>

<style lang="scss">
  .menu-container {
    width: 230px;
    overflow: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #324157;
    transition: left .3s;
  }
  .home {
    font-size: 24px;
  }
</style>
