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
      fields: ['招聘会名称', '招聘类别', '举行地点', '举行时间', '状态', '管理员', '更新时间'],
      filters: ['招聘会名称'],
    };
  },
};
</script>

