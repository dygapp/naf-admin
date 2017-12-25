<template>
  <naf-table :fields="fields" :filters="filters" :readonly="true"></naf-table>
</template>
<<script>
import NafTable from '@/components/data/naf-table';

export default {
  components: {
    NafTable,
  },
  data() {
    return {
      fields: ['事件类型', '事件描述', '操作目标', '操作参数', '执行结果', '结果明细', '操作时间'],
      filters: ['事件类型', '执行结果', '操作时间'],
    };
  },
};
</script>

