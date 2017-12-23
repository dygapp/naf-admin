<template>
  <el-container class="layout">
  <el-aside :width="asideWidth" class="sider">
    <el-container>
      <el-header class="logo" :height="layout.headerHeight" >
        <router-link to="/">
          <img src="~/assets/logo1.svg" alt="logo" style="height:32px;width:32px;" />
        </router-link>
        <h1>{{name}}</h1>
      </el-header>    
      <el-main :collapse="menuCollapse"><my-menu theme="light" :is-collapse="menuCollapse"></my-menu></el-main>
    </el-container>
  </el-aside>
  <el-container>
    <el-header class="header" :height="layout.headerHeight">
      <i class="naf-icons" :class="{'naf-icon-unfold': menuCollapse, 'naf-icon-fold': !menuCollapse,}" @click="toggleMenu"></i>
      <el-dropdown class="right">
        <span class="el-dropdown-link">
          <i class="naf-icons naf-icon-avatar"></i>
          <span class="name">管理員</span>
        </span>
        <el-dropdown-menu class="action-menu" slot="dropdown">
          <el-dropdown-item><i class="naf-icons naf-icon-user"></i><span>个人中心</span></el-dropdown-item>
          <el-dropdown-item><i class="naf-icons naf-icon-setting"></i>设置</el-dropdown-item>
          <el-dropdown-item divided><i class="naf-icons naf-icon-quit"></i>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>            
    </el-header>
    <el-main>
      <el-container class="content">
        <el-header :height="layout.breadHeight">
          <my-bread></my-bread>
        </el-header>
        <el-main>
          <transition>
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-main>
    <el-footer class="footer" height="layout.footerHeight"><my-footer></my-footer></el-footer>
  </el-container>
</el-container>
</template>
<script>
import config from '@/utils/config';
import MyHeader from './header';
import MyFooter from './footer';
import MyMenu from './menu-pane';
import MyBread from './bread';

const { layout } = config;
export default {
  components: {
    MyHeader,
    MyFooter,
    MyMenu,
    MyBread,
  },
  data() {
    return {
      menuCollapse: false,
      name: config.shortName,
      layout,
    };
  },
  methods: {
    toggleMenu() {
      this.menuCollapse = !this.menuCollapse;
    },
  },
  computed: {
    asideWidth() {
      return this.menuCollapse
        ? layout.asideCollapseWidth
        : layout.asideExpandWidth;
    },
  },
};
</script>


<style scoped lang="less">
.layout {
  height: 100%;
  .logo {
    border-bottom: solid 1px #e6e6e6;
  }
  .header {
    border-bottom: solid 1px #e6e6e6;
    line-height: 64px;
    background: #20a0ff;
    color: #fff;
    .naf-icon-avatar {
      margin-right: 4px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 20px;
      border-radius: 14px;
      background: grey;
      padding: 4px;
    }
    .name {
      color: #fff;
    }
  }
  .sider {
    background: #20a0ff; /*#545c64;*/
    height: 100%;
    overflow: initial;
    .el-container {
      height: 100%;
    }
    .el-main {
      padding: 0;
      overflow: auto;
      background: #fff;
      .el-menu {
        height: 100%;
      }
    }
    .el-main[collapse] {
      overflow: initial;
    }
    .el-header {
      border-right: solid 1px #e6e6e6;
      padding: 0 16px;
      height: 64px;
      line-height: 64px;
      overflow: hidden;
      vertical-align: middle;
      img {
        vertical-align: middle;
      }
      h1 {
        color: #fff;
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 12px;
        line-height: 64px;
      }
    }
  }
  .right {
    float: right;
  }
  .content {
    height: 100%;
  }
}
.action-menu {
  .naf-icons {
    margin-right: 4px;
  }
}
</style>
