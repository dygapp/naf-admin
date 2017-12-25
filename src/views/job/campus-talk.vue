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
      fields: ['单位名称', '主题', '举办地点', '举办时间', '所在学校', '状态', '管理员', '更新时间'],
      filters: ['单位名称', '所在学校'],
    };
  },
};
</script>

