<!--简单布局，只有header和footer，没有边栏和面包屑-->
<template>
  <el-container class="layout" direction="vertical">
    <el-header class="header" :height="layout.headerHeight" :style="{lineHeight: layout.headerHeight}">
      <naf-header :short-name="name" :logo-width="asideWidth" :menu-collapse="menuCollapse" :nav-mode="navMode" 
                  @toggle-menu="toggleMenu" @switch-mode="switchMode" :menu-items="navModules"/>
    </el-header>
    <el-main class="content">
          <el-scrollbar>
            <transition>
              <nuxt />
            </transition>
          </el-scrollbar>
    </el-main>
    <el-footer class="footer" height="layout.footerHeight">
      <naf-footer></naf-footer>
    </el-footer>
  </el-container>
</template>
<script>
import { mapState } from 'vuex';
import config from '@/config';
import NafHeader from '@/frame/header';
import NafFooter from '@/frame/footer';
import NafMenu from '@/frame/sider';
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
      name: config.shortName,
      layout: { ...defaultConfig, ...layout }
    };
  },
  methods: {
    toggleMenu() {
      this.$store.commit('menu/NAV_TOGGLE_COLLAPSE');
    },
    switchMode(mode) {
      this.$store.commit('menu/NAV_SWITCH_MODE', mode);
    },
  },
  computed: {
    ...mapState({
      navMode: state => state.menu.mode,
      navModule: state => state.menu.current,
      navModules: state => state.menu.modules,
      menuCollapse: state => state.menu.collapse,
    }),
    asideWidth() {
      return this.menuCollapse
        ? layout.asideCollapseWidth
        : layout.asideExpandWidth;
    },
    menuItems() {
      let items = this.$store.state.menu.items || [];
      if(this.navMode == 'nested') {
        items = items.filter(p=>p.options.module == this.navModule);
      }
      return items;
    },
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
  .content {
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
