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
      fields: ['ID', '名称'],
      filters: ['名称'],
    };
  },
};
</script>

