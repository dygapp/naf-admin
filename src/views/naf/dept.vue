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
      fields: ['ID', '上级ID', '部门名称'],
      filters: ['部门名称'],
    };
  },
};
</script>

