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
      fields: ['企业名称', '统一社会信用代码', '所在省份', '企业性质', '企业规模', '注册时间', '审核状态', '注册人', '注册人手机'],
      filters: ['企业名称'],
    };
  },
};
</script>

