<template>
  <div class="header-box">
      <div class="logo" :style="{width: logoWidth}">
        <router-link to="/">
          <img src="~/assets/logo1.svg" alt="logo" style="height:32px;width:32px;" />
        </router-link>
        <h1>{{shortName}}</h1>
      </div>
      <div class="banner">
        <i class="naf-icons" :class="{'naf-icon-unfold': menuCollapse, 'naf-icon-fold': !menuCollapse,}" @click="toggleMenu"></i>
        <el-dropdown class="right">
          <span class="el-dropdown-link">
            <i class="naf-icons naf-icon-avatar"></i>
            <span class="name">管理員</span>
          </span>
          <el-dropdown-menu class="action-menu" slot="dropdown">
            <el-dropdown-item>
              <i class="naf-icons naf-icon-user"></i>
              <span>个人中心</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="naf-icons naf-icon-setting"></i>设置</el-dropdown-item>
            <el-dropdown-item divided>
              <i class="naf-icons naf-icon-quit"></i>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>    
</template>
<script>
export default {
  props: {
    shortName: String,
    logoWidth: {
      type: String,
      default: '256px',
    },
    menuCollapse: Boolean,
  },
  methods: {
    toggleMenu() {
      this.$emit('toggle-menu');
    },
  },
};
</script>
<style lang="less" scoped>
  .header-box {
    border-bottom: solid 1px #e6e6e6;
    background: #20a0ff;
    color: #fff;
    display: flex;
    flex-direction: row;
    padding: 0;
    height: 100%;
    .logo {
      border-right: solid 1px #e6e6e6;
      padding: 0 16px;
      overflow: hidden;
      img, h1 {
        vertical-align: middle;
      }
      h1 {
        display: inline-block;
        margin: 0 0 0 12px;
      }
    }
    .banner {
      flex: 1;
      padding: 0 20px;
      .right {
        float: right;
      }
      .naf-icon-avatar {
        margin-right: 4px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 20px;
        border-radius: 14px;
        background: grey;
        padding: 4px;
      }
    }
  }
</style>
