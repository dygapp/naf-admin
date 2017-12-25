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
      fields: ['分类', '代码', '名称'],
      filters: ['分类', '代码'],
    };
  },
};
</script>

