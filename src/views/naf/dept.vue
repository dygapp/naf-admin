<template>
  <demo-table :fields="fields" :filters="filters"></demo-table>
</template>
<<script>
import DemoTable from '@/components/data/demo-table';

export default {
  components: {
    DemoTable,
  },
  data() {
    return {
      fields: ['ID', '上级ID', '部门名称'],
      filters: ['部门名称'],
    };
  },
};
</script>

