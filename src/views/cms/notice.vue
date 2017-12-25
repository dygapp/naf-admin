<template>
  <naf-table :fields="fields" :filters="filters"></naf-table>
</template>
<<script>
import NafTable from '@/components/data/naf-table';

export default {
  components: {
    NafTable,
  },
  data() {
    return {
      fields: ['标题', '内容概要', '发布时间', '发布人', '更新时间', '状态'],
      filters: ['标题'],
    };
  },
};
</script>

