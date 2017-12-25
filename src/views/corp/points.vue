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
      fields: ['企业名称', '统一社会信用代码', '注册时间', '企业状态', '当前积分'],
      filters: ['企业名称'],
    };
  },
};
</script>

