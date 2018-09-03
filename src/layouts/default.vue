<template>
  <el-container class="layout" direction="vertical">
    <el-header class="header" :height="layout.headerHeight" :style="{lineHeight: layout.headerHeight}">
      <naf-header :logo-width="asideWidth" :short-name="name" :menu-collapse="menuCollapse" @toggle-menu="toggleMenu">
      </naf-header>
    </el-header>
    <el-main style="padding: 0;display: flex;">
      <el-container class="main">
        <el-aside :width="asideWidth" class="sider">
          <el-scrollbar>
            <naf-menu :style="{width: asideWidth}" theme="light" :is-collapse="menuCollapse"></naf-menu>
          </el-scrollbar>
        </el-aside>
        <el-main class="content">
          <el-scrollbar>
          <div class="bread" :height="layout.breadHeight">
            <naf-bread></naf-bread>
          </div>
          <div class="page">
            <transition>
              <nuxt />
            </transition>
          </div>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-main>
    <el-footer class="footer" height="layout.footerHeight">
      <naf-footer></naf-footer>
    </el-footer>
  </el-container>
</template>
<script>
import config from '@/config';
import NafHeader from '@/frame/header';
import NafFooter from '@/frame/footer';
import NafMenu from '@/frame/menu-pane';
import NafBread from '@/frame/bread';

const defaultConfig = {
  breadHeight: '24px',
  headerHeight: '64px',
  footerHeight: '48px',
  asideExpandWidth: '256px',
  asideCollapseWidth: '64px',
};

const { layout = {} } = config;
export default {
  middleware: 'auth',
  components: {
    NafHeader,
    NafFooter,
    NafMenu,
    NafBread
  },
  data() {
    return {
      menuCollapse: false,
      name: config.shortName,
      layout: { ...defaultConfig, ...layout }
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
    }
  }
};
</script>


<style scoped lang="less">
.layout {
  height: 100%;
  overflow: hidden;
  .header {
    padding: 0;
  }
  .sider {
    background: #fff;
    max-height: 100%;
    overflow: initial;
    overflow-y: auto;
    border-right: solid 1px #e6e6e6;
    /*.el-menu {
      height: 100%;
    }*/
    .el-scrollbar {
      height: 100%;
      /deep/ .el-scrollbar__wrap {
        // margin-right: 0 !important;
        overflow-x: hidden;
      }
    }
  }
  .main {
    // FOR EDGE
    overflow: hidden;
  }
  .content {
    padding: 0;
    .bread, .page {
      padding: 10px;
    }
    .page {
      flex: 1;
    }

    .el-scrollbar {
      height: 100%;
      widows: 100%;
      /deep/ .el-scrollbar__wrap {
        overflow-x: hidden;
        display: flex;
      }
      /deep/ .el-scrollbar__view {
        padding: 10px;
        display: flex;
        flex: 1;
        flex-direction: column;
        // overflow: auto;
      }
    }
  }
}

.action-menu {
  .naf-icons {
    margin-right: 4px;
  }
}
</style>
<style>
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
}
</style>
