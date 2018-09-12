<template>
  <el-table border style="width: 100%;overflow: auto;" v-bind="options" :data="data">
    <slot>
      <el-table-column v-for="(item,index) in listFields" :key="'field'+index" :label="item.label" :prop="item.name" v-bind="item.options" :formatter="item.formatter"/>
      <el-table-column label="操作" width="100" v-if="!readonly">
        <template slot-scope="scope">
          <el-button v-for="(item,index) in operItems" :key="'field'+index" @click="handleOper(item, scope.row)" type="text" size="small">{{item.label}}</el-button>
        </template>
      </el-table-column>
    </slot>
  </el-table>
</template>
<script>
import { FieldMeta, Operation, Formatter } from './meta-util';

export default {
  name: 'lite-grid',
  props: {
    meta: { type: Array, required: true },
    readonly: Boolean /* 是否显示操作列 */,
    options: {
      type: Object,
      default: () => ({ size: 'mini' })
    } /* 表格扩展属性 */,
    operation: {
      default: () => [['edit', '编辑'], ['delete', '删除', true]]
    } /* 操作类型 */,
    data: Array,
  },
  methods: {
    async handleOper({ event, label, confirm }, data) {
      try {
        if (confirm) {
          await this.$confirm(`是否${label}此数据?`, '请确认', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          });
        }
        this.$emit(event, data);
        this.$emit('oper', { event, data });
      } catch (err) {
        if (err == 'cancel') {
          this.$message({
            type: 'info',
            message: `已取消${confirm}`
          });
        }
      }
    },
  },
  computed: {
    listFields() {
      const res = this.meta
        .map(FieldMeta)
        .filter(p => p.slots.list)
        // .sort((a, b) => b.order - a.order)
        .map(p => ({ ...p.field, options: p.listOpts, formatter: Formatter(p, this) }));
      // console.log('listFields: ', res);
      return res;
    },
    operItems() {
      return Operation(this.operation);
    }
  }
};
</script>
<style lang="less" scoped>
.el-table {
  height: 100%;
  overflow: auto;
}
</style>
