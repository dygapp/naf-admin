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
      fields: ['用户', 'CN', 'DN', '证书状态', '签发时间'],
      filters: ['用户', 'CN'],
    };
  },
};
</script>

