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
      fields: ['单位名称', '主题', '招聘人数', '招聘截止时间', '发布时间', '发布人', '更新时间'],
      filters: ['单位名称', '主题'],
    };
  },
};
</script>

