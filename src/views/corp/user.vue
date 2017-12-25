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
      fields: ['姓名', '用户标识', '所在企业', '手机号', '电子邮箱', '注册时间', '用户状态'],
      filters: ['姓名', '用户标识', '所在企业', '手机号'],
    };
  },
};
</script>

