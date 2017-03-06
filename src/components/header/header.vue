<template>
  <header class="header">
  <!-- logo -->
    <a class="logo" href="#">
      <span class="logo-mini"><b>A</b>LT</span>
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>
    <!-- header nav -->
    <nav class="navbar">
      <!-- sidebar toggle button -->
      <a href="javascript:void(0);" class="sidebar-toggle icon">
        <i class="fa fa-bars"></i>
      </a>
      <div class="nav-common-menu">
        <ul class="clearfix">
          <li>
            <a href="javascript:void(0);" class="nav-badge icon">
              <i class="fa fa-envelope-o"></i>
              <i class="badge badge-success">3</i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" class="nav-badge icon">
              <i class="fa fa-bell-o"></i>
              <i class="badge badge-warning">3</i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" class="nav-badge icon">
              <i class="fa fa-flag-o"></i>
              <i class="badge badge-danger">3</i>
            </a>
          </li>
          <li class="user-menu">
            <a href="javascript:void(0);" class="user-menu-item">
              <img src="../../assets/img/1.jpg" height="25" width="25" class="user-image">
              <span class="user-name">kk</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" class="nav-badge icon">
              <i class="fa fa-gears"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'v-header'
}
</script>

<style lang="scss">
@import '../../assets/scss/common.scss';

  .header {
    .logo {
      display: inline-block;
      float: left;
      width: 230px;
      min-height: 50px;
      overflow: hidden;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      background-color: #367fa9;
      transition: width .3s;
      .logo-mini {
        display: none;
      }
    }
    .navbar {
      display: inline-block;
      float: left;
      width: calc(100% - 230px);
      min-height: 50px;
      background-color: #3c8dbc;
      transition: width .3s;
      .sidebar-toggle {
        display: inline-block;
        padding: 0 15px;
        float: left;
        line-height: 50px;
        color: #fff;
        &:hover {
          background-color: #367fa9;
        }
      }
      .nav-common-menu {
        float: right;
        li {
          float: left;
          a{
            padding: 0 20px;
            line-height: 50px;
          }
          &:hover,
          &:focus{
            background-color: #337ab7;
          }
        }
      }
      .nav-badge{
        display: inline-block;
        position: relative;
        .badge {
          position: absolute;
          top: 6px;
          right: 13px;
          line-height: normal;
        }
      }
    }
    .icon {
      font-size: 16px;
      color: #fff;
    }
    .user-menu {
      .user-menu-item {
        display: block;
      }
      .user-image {
        display: inline-block;
        margin-right: 10px;
        vertical-align: middle;
        border-radius: 50%;
      }
      .user-name {
        color: #fff;
      }
    }
  }
</style>
