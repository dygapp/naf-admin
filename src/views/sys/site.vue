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
      fields: ['分站名称', '分站标识', '域名', '状态', '创建时间'],
      filters: ['分站名称', '分站标识'],
    };
  },
};
</script>

