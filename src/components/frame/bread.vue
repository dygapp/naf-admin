<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in catalog" :key="index">{{item}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  computed: {
    catalog() {
      return this.$route.meta.catalog;
    },
  },
};
</script>

